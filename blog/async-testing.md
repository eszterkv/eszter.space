---
title: Async testing and TDD in Jest
date: 2021-01-21
---

In any real-life code base, 100% unit test coverage is next to impossible. Some argue it’s not even important — testing the **critical parts** is more important than checking if certain paragraph has the content we expect it to have.

Small UI bugs might be confusing for the user, but the app won’t break just because we render `Hello, !` instead of `Hello, Dr. Zoidberg!`

## So, what are the important parts?

Anything that can cause a nasty bug 🦟. Unhandled exceptions are a great example. When an API call or other asynchronous operation fails, an error is thrown. If our code doesn’t handle such errors, the user is on their own — we can’t show a friendly error message, the web app just won’t work, and they will not know why.

Consider the following function[^1]:

**`get-user.js`**
```js
async function getUser(string) {
  const res = await fetch(`${apiBase}/user/${userId}`)
  const user = await res.json()

  return user
}
```

This will work fine in most cases, **except** when something goes wrong. Maybe the expected headers have been changed, or a token has expired, or the user is offline.

But **how do we know when and how will it fail?** 

## Let’s test it!

The thing with API calls is, we can’t always make all the possible API calls in our tests. Also, it’s not a good idea – getting data is one thing, but how about creating, updating or deleting, rate limits etc.? We shouldn’t modify any of our data or spend too much money just for the sake of testing. So, it’s always a good idea to mock API calls.[^2]

**`get-user.test.js`**[^3]
```js
describe('getUser', () => {
  const testUser = { name: 'Amy', id: 'testId' }

  it('returns user data', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(testUser)
      })
    )

    const user = await getUser('testId')

    expect(user).toEqual({ name: 'Amy', id: 'testId' })
  })
})
```

## Breaking the code, and then fixing it

In good [TDD](https://en.wikipedia.org/wiki/Test-driven_development) spirit, I will mock a failed request, and expect the application not to break.

**`get-user.test.js`**
```js
it('does not break if the API call fails', async () => {
  global.fetch = jest.fn(() => {
    Promise.reject(new Error('blah'))
  })

  await getUser('testId')
})
```

It fails, because the promise throws an error we don’t catch. There’s the first opportunity to improve our code! **It’s always good practice to wrap async code in a try/catch block**, so we can handle errors where they happen.

## TDD until you succeed

One step (no more than a few lines) at a time, let’s fix `getUser()` to make it pass, expect an improved functionality in the test, and make it pass again. Repeat this until it does everything we need it to do — this time, it will only be two more iterations.

#### Fix #1

**`get-user.js`**
```js
async function getUser(userId) {
  try {
    const res = await fetch(`${apiBase}/user/${userId}`)
    const user = res.json()

    return user
  } catch(error) {
    // we’ll take care of this later
  }
}
```

✅ This is great – tests are passing! Now let’s do something when there’s an error.

#### Break and fix #2

**`get-user.test.js`**
```js
it('handles error if the API call fails', async () => {
  global.console = {
    log: jest.fn(),
    error: jest.fn(),
  }
  global.fetch = jest.fn(() => {
    Promise.reject(new Error('blah'))
  })

  await getUser('testId')

  expect(console.error).toBeCalledWith(new Error('blah'))
})
```

❌ `console.error` is not being called, so let’s take care of that.

**`get-user.js`**
```js
async function getUser(userId) {
  try {
    const res = await fetch(`${apiBase}/user/${userId}`)
    const user = res.json()

    return user
  } catch(error) {
    console.error(error)
  }
}
```

✅ All done!

---

For a more comprehensive guide on Jest, async testing and test-driven development, [check out Jest’s Async tutorial](https://jestjs.io/docs/en/tutorial-async), and [this article about TDD](https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2/).

![Hail Science](https://media.giphy.com/media/rAZEnOu0KHQK4/giphy.gif)

[^1]: It’s intentionally not great, we’ll get to that in a minute.

[^2]: Read more about mocks in Jest [here](https://jestjs.io/docs/en/mock-functions.html).

[^3]: Note the `async` keyword before the arrow function. The reason why we have two [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) here is that [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) _is itself_ an async function that returns a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response), which, to be read, needs to be resolved by the `.json()` method.
