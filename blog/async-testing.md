---
title: Async testing in Jest
date: 2021-01-16
---

In any real-life code base, 100% unit test coverage is next to impossible. Some argue it’s not even important — testing the **critical parts** is more important than checking if certain paragraph has the content we expect it to have.

Small UI bugs might be confusing for the user, but the app won’t break just because we render `Hello, !` instead of `Hello, Amy!`

## So, what are the important parts?

Anything that can cause a nasty bug 🦟. Unhandled exceptions are a great example. When an API call or other asynchronous operation fails, an error is thrown. If our code doesn’t handle such errors, the user is on their own — we can’t show a friendly error message, the web app just won’t work, and they will not know why.

Consider the following function[^1]:

```js
async function getUserData(string) {
  const res = await fetch(`${apiBase}/user/${userId}`)
  const user = await res.json()

  return user
}
```

This will work fine in most cases, **except** when something goes wrong. Maybe the expected headers have been changed, or a token has expired, or the user is offline.

But **how do we know when and how will it fail?** 

## Let’s test it!

The thing with API calls is, we can’t always make all the possible API calls in our tests. Also, it’s not a good idea – getting data is one thing, but how about creating, updating or deleting, rate limits etc.? We shouldn’t modify any of our data or spend too much money just for the sake of testing. So, it’s always a good idea to mock API calls.[^2]

```js
describe('getUserData', () => {
  const testUser = { name: 'Amy', id: 'testId' }

  // Note the async keyword before the arrow function
  it('returns user data', async () => {
    /* Fetch returns a Promise that has a json() method inside,
     * which returns a second Promise. */
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(testUser)
      })
    )

    const user = await getUserData('testId')
    expect(user).toEqual({ name: 'Amy', id: 'testId' })
  })
})
```

## Breaking the code, and then fixing it

---

It’s good practice to wrap async code in a try/catch block, so we can handle errors where they happen.

Here’s an improved version:

```js
async function getUserData(userId) {
  try {
    const res = await fetch(`${apiBase}/user/${userId}`)
    const user = res.json()

    return user
  } catch(error) {
    // there are better ways to show errors, this is just an example
    alert('Something went wrong, please try again later.')
  }
}
```

[^1]: It’s intentionally not great, we’ll get to that in a minute.

[^2]: Read more about mocks in Jest [here](https://jestjs.io/docs/en/mock-functions.html).
