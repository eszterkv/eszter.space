---
title: Accessible lazy-loading with a <noscript> fallback
date: 2020-07-04
---

Designing for the [probably even less than 0.2%](https://blockmetry.com/blog/javascript-disabled) may sound like an overkill. Static sites (such as Gatsby, Svelte, Jekyll, Hugo, 11ty etc.) will cover non-script users most of the time. But if you need more fine-grained control, `<noscript>` is here to save the day.

If you turn off JavaScript in a browser, and open up any React app, you’re quite likely to see the sentence _“This app works best with JavaScript enabled”_ or similar. Looking at the source code[^1], this is the content of a [`<noscript>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) — content that is only rendered when JavaScript is not available.

You can put mostly anything inside `<noscript>`, including `<meta>`, `<link>` and `<style>` tags. It’s a good place for fallback content and stylesheets.

## A real-life use case: lazy-loading images

Using a library like [vanilla-lazyload](https://github.com/verlok/vanilla-lazyload) already improves accessibility of a website, because it makes load time much faster, hence a smoother experience for users on average networks or devices.[^2]

The core concept behind lazy-loading is either omitting the `src` and replacing it with a [data attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes), or using a tiny version of the image with a blur-up effect.[^3] When the actual asset is loaded, it’s faded in using CSS. I’m omitting image width and height here, but you should try to set it to prevent content reflow.

#### HTML
```html
<img data-src="cat.png" alt="My cat" class="lazy" id="cat" />
```

#### JS
```js
const catImg = document.getElementById(‘cat’)
const fullsizeSrc = catImg.dataset.src // from the data-src attribute
const loader = new Image()
loader.onload = () => {
  catImg.src = fullsizeSrc
  catImg.classList.add(‘loaded’)
}
// VERY important: .onload() has to come before .src assignment
loader.src = fullsizeSrc
```

#### CSS
```css
.lazy {
  opacity: 0;
  transition: opacity .5s ease;
}

.lazy.loaded {
  opacity: 1;
}
```

The (admittedly edge-case) problem with these is, __if there’s no JavaScript, the images will never be loaded__. The solution is to add a non-lazy version for every lazy image, like so (and you can do this programmatically, at build time):

```diff
  <img data-src="cat.png" alt="My cat" class="lazy" id="cat" />
+ <noscript>
+  <img src="cat.png" alt="My cat" />
+ </noscript>
```

It will still be super fast, because whatever is inside `<noscript>` won’t load unless JavaScript is off. There’s still one issue to fix, though: hiding the lazy image placeholders when the `<noscript>` version kicks in. Here’s how, anywhere in your `<head>`:

```diff
+ <noscript>
+   <style type="text/css">
+     .lazy { display: none; }
+   </style>
+ </noscript>
```

Alternatively, you can load an external stylesheet too.

That’s it for inclusive lazy-loading — [let me know](https://github.com/c0derabbit/eszter.space/issues/new) if I’ve missed something!

[^1]: See [react-redux-ts/index.html at master · c0derabbit/react-redux-ts · GitHub](https://github.com/c0derabbit/react-redux-ts/blob/master/public/index.html#L16)
[^2]: Let’s not forget that as developers and/or designers, both our devices and network are likely to be superior to that of the average user.
[^3]: I’ve written about a [React solution for the blur-up lazy loading here](/lazy-loading).
