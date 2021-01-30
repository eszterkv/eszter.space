---
title: Save users from selecting traffic lights with reCAPTCHA v3
date: 2021-01-30
---

Have you ever had to select all zebra crossings, buses, or traffic lights, sometimes repeatedly? It’s such a dreadful user experience, isn’t it?

> “Don’t do unto others what you don't want done unto you.”
<cite> — Confucius</cite>

In real Confucian spirit, just as we shouldn’t litter a website with popups, we shouldn’t ask anyone to perform 5-6 or more extra clicks just so they can log in, view content or search for something. But the marketing department / your boss / client / … want no spam.

## There’s a better way

And it‘s Google’s [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3). It _”returns a score for each request without user friction. The score is based on interactions with your site and enables you to take an appropriate action for your site.”_[^1]

What this means, essentially, is that you put the script on the site, and reCAPTCHA checks how likely the visitor is to be a real person with good intentions, and not a spam bot.

It does have a server-side part, so you’ll need a small serverless lambda to make this work.

Without further ado:

## Here’s how to implement it

This example assumes a form submission to a backend using `fetch`, `axios` or similar. It is written in vanilla JS, but can be easily adapted to the frontend framework of your choice.

1. Get an API key [here](https://g.co/recaptcha/v3).

2. Load the script in your HTML:
    ```html
    <script
      src="https://www.google.com/recaptcha/api.js?render=RECAPTCHA_SITE_KEY"
    ></script>
    ```

3. Execute reCAPTCHA before form submission on the **client side**:
    ```js
    function submitForm(event) {
      event.preventDefault()

      grecaptcha.ready(function() {
        grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
          .then(function(token) {
            // submit form to server, including token
          })
      })
    }
    ```

4. Verify reCAPTCHA token on the **server side**[^2]:
    ```js
    // somewhere in your handler
    try {
      const verifyApi = 'https://www.google.com/recaptcha/api/siteverify'
      const secret = process.env.RECAPTCHA_SECRET

      const captchaRes = await axios.post(
        `${verifyApi}?secret=${secret}&response=${token}`
      )

      if (!captchaRes.data.success) {
        throw 'Failed captcha verification'
      }

      // otherwise continue – your code here…
    } catch(error) {
      // handle error
    }
    ```

That’s about it — [check out the docs](https://developers.google.com/recaptcha/docs/v3) for specifics or different setups.

P.s.: if you _really_ want the whole thing to be seamless, you can hide any traces of the reCAPTCHA by adding `display: none;` to the class `.grecaptcha-badge`.[^3] In any case, it’s not bad practice to show a bit of text saying (and linking to) ‘Protected by reCAPTCHA.’

[^1]: [reCAPTCHA&nbsp;docs](https://developers.google.com/recaptcha/docs/v3)

[^2]: The server-side code is intentionally more modern — adapt client-side as you see fit. The client-side code is written so it works as-is in most browsers.<br /><br />I also use axios here, but that’s unimportant.

[^3]: I haven’t checked whether Google are OK with this, so if you use this in production, it’s best to check.
