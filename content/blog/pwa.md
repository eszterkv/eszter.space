---
layout: post
title: Turning any website into a PWA with vanilla JS
date: 2020-06-25T15:00:00.000Z
---

[Progressive web apps (PWAs)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) are installable, responsive web applications that work on any device (within reason) and deliver a reliable experience on unreliable networks, and even work offline (once they’ve loaded, of course).

The _progressive_ in the name suggests that they provide an _acceptable experience_ on as many browsers as possible[^1], while offering an advanced experience on modern browsers, enabling new features as they become available.

## PWA availability in major web frameworks
[Gatsby](https://www.gatsbyjs.org/docs/progressive-web-app/) and [Sapper](https://sapper.svelte.dev/docs#Deploying_service_workers) offer it out of the box. It’s opt-in both in [React](https://create-react-app.dev/docs/making-a-progressive-web-app/) and [Angular](https://angular.io/api/service-worker), and [Vue offers a core plugin](https://cli.vuejs.org/core-plugins/pwa.html). There’s a [PWA plugin](https://github.com/okitavera/eleventy-plugin-pwa) for [11ty](https://11ty.dev) too. So — we’re fairly well covered!

But what if we need something vanilla, or something _more specific_?

## PWA from scratch

### 1. Make it installable

In practice, this is when the user can “add to home screen” on their mobile device. To achieve this, we need just a few things in `index.html`:

```diff
  <head>
    <title etc…>
+   <meta name="theme-color" content="#f00">
+   <link rel="shortcut icon" href="/favicon.ico">
+   <link rel="apple-touch-icon" href="/path/to/icon.png">
+   <link rel="manifest" href="/path/to/your.webmanifest">
  </head>
```

Now, we need to create those icons and the web manifest we refer to.

__your.webmanifest__ (you can call this anything, with a `.webmanifest` extension)

```json
{
  "name": "Your site – a cool web app",
  "short_name": "Your site",
  "description": "Here goes your awesome description",
  "icons": [
    {
      "src": "icon32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "icon512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "index.html",
  "display": "fullscreen",
  "theme_color": "#f00",
  "background_color": "#f00"
}
```

If you run a Lighthouse audit now, the PWA section will already show some passed checks, e.g. web app manifest meets requirements, sets a theme colour, provides a valid `apple-touch-icon`. 

It will, however, complain that your app “does not register a service worker”. Let’s get to that!

### 2. Register the service worker[^2]

```html
<script type="text/javascript">
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/path/to/service-worker.js');
  }
</script>
```

- - -

#### Notes

[^1]: See [Advantages of web applications](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#Advantages_of_web_applications) and [Progressive Enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement), both on MDN.
[^2]: By the way, [service workers can do much more](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) than make an app available offline.
