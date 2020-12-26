---
title:  Using environment variables with Gatsby and Netlify
date:   2020-12-26
---

Environment variables are a good way to use API keys in web apps without committing them to source code management. They have more use on the backend or at build time where we have to protect secret keys from being exposed to the client side, but are needed for data-fetching or API calls. Having said that, it’s a good practice to make use of them on the client side as well, when using public keys.

Today, we will look at how environment variables work in Gatsby.

Before we go forward, [Gatsby](https://www.gatsbyjs.org/) is a superfast frontend framework/static site generator written in React. [Netlify](https://www.netlify.com/) offers a way to deploy it, and they play pretty well together.

## Using environment variables in JavaScript and Node.js

In JavaScript and Node.js, environment variables can be accessed from `process.env`. They are usually defined in a file named `.env` — or, if dev and prod environments are different, `.env.development` and `.env.production`. Here’s an example:

**`.env`**
```
SECRET=foo
```

They can also be defined in the actual process, in \*sh, by typing `export SECRET=foo`. When running the app, this has the same result — it’s just more convenient to manage them in `.env` files.

To keep secrets a secret, it’s crucial to avoid committing environment variables to source code. The best way to do this is to add `.env` and `.env.*` to `.gitignore`.

## The two types of environment variables in Gatsby

An interesting thing to note with Gatsby is that it can have two kinds of environment variables: client-side and server-side. We don’t really have a *server* in Gatsby, so I will call these *build-time* instead.

### Client-side environment variables

These are public API keys, API urls etc. that we want to reuse, and don’t mind exposing them to the client. Public keys are safe to use on the client side, therefore they can be included in the client-side bundle.

Gatsby includes a safety measure to avoid unwillingly expose secrets: only variables prefixed with `GATSBY_` will be available to the client. So, if we define `MY_PUBLIC_KEY=foo` in our `.env`, `process.env.MY_PUBLIC_KEY` won’t be available for Gatsby!

Instead, we should prefix it, like so: `GATSBY_MY_PUBLIC_KEY=foo`. This way, we will be able to use it on the client side, by using `process.env.GATSBY_MY_PUBLIC_KEY`.

Of course, you could ask where is the sense in using environment variables for things that will get exposed to the client anyway. Sure, we could use a config file, or simply hard-code it where we make the API call. However, imagine you have a set of keys (as will happen for many APIs), consisting of a public key and a secret key. Rotating them is much easier to manage if they are kept in the same place.

### Build-time environment variables

There are keys and secrets which we only need at build time, like an API key to fetch content from a CMS that we’ll use in `gatsby-node.js` to build pages. We only have to make these API calls when we are building the site (and not when the client is requesting the page), so there is no need for them to be bundled in the application. As such, the bundle built by Gatsby does not need to access it.

To keep sensitive API keys unexposed, these variables should **not** have the `GATSBY_` prefix — we should define them as `MY_API_KEY=something`.

## Putting it all into practice

### Locally

Add `.env.*` to `.gitignore`. Then, create a file called `.env.development` with the following content:

```
GATSBY_SOME_PUBLIC_KEY=foo
SOME_SECRET_KEY=bar
```

In this case, the first variable will be accessible from the client side; the second will only be available for our application at build time.

### On Netlify
Go to `https://app.netlify.com/sites/{your_site}/deploys#environment`, click ‘Edit variables’, then ‘New variable’, add your keys and values, and save.[^1]

## Done!
That’s it, Gatsby will pick these up from Netlify’s build environment, so now we can access the first variable in client-side code as `process.env.GATSBY_SOME_PUBLIC_KEY`, and the second only at build time, as `process.env.SOME_SECRET_KEY`.

You can read more about environment variables in Gatsby [here](https://www.gatsbyjs.org/docs/environment-variables/).

[^1]: This works very similarly on other hosts, such as Vercel, AWS or Heroku.
