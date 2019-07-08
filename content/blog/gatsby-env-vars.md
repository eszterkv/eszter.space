---
layout: post
title:  "How to use environment variables with Gatsby and Netlify in two simple steps"
date:   2019-06-29 22:00:00 +0200
---
So you have a secret key. I have a public one, but there's a limit to requests per day in free tier, so it's better not to commit to source code. Plus, with any kind of key, if you can store a key on the server, it's better not to commit it to source code.

Before we go forward, [Gatsby.js](https://www.gatsbyjs.org/) is a superfast frontend framework/static site generator written in React. [Netlify](https://www.netlify.com/) offers a way to deploy it, and they play pretty well together.

Back to our problem: I don't want any keys, secret or public, committed to my source code. But I'd still like to use it as follows:
```js
const apiKey = process.env.MY_API_KEY;
// do something with key
```
To achieve this, we just need a couple of things:
1. configure environment variables locally and on Netlify[^1]2
2. make those variables available to Gatsby's client side.

### Configuring environment variables
Locally, we just `export MY_API_KEY=monkeys`. To persist, we can put this into `~/.bash_profile`.

On Netlify, go to `https://app.netlify.com/sites/{your_site}/deploys#environment`, click 'Edit variables', then 'New variable', add your key and value, and save. That's it!

### Making them available to Gatsby
The most important thing to keep in mind here is to hide `MY_API_KEY` from the source code. So, we can't just put it into a `.env` file, or define it in `package.json` — we are getting real close though!

Instead, we'll use the previously defined env variable, prefixed with `GATSBY_`, so that Gatsby knows we want it to be available on the client side[^2].

*package.json*
```js
  "scripts": {
    "build": "GATSBY_MY_API_KEY=$MY_API_KEY gatsby build",
    "develop": "GATSBY_MY_API_KEY=$MY_API_KEY gatsby develop",
    // and so forth
  },
```

This is a bit repetitive and not too scalable, so letʼs see if there is a way to improve.

```js
  "scripts": {
    "setvariables": "GATSBY_MY_API_KEY=$MY_API_KEY GATSBY_OTHER_TOKEN=$OTHER_TOKEN",
    "build": "yarn setvariables gatsby build",
    "develop": "yarn setvariables gatsby build",
  },
```

Better, now we only have to update in one place.

### Done!
That's it, now we can access the variable in client-side code as `process.env.GATSBY_MY_API_KEY`.

---
#### Notes
[^1]: Btw, this works very similarly on other hosts, such as Heroku.
[^2]: Read more on Gatsby and environment variables [here](https://www.gatsbyjs.org/docs/environment-variables/).
