---
title: Custom filters for Nunjucks templates in Eleventy
date: 2020-10-14
tags: 11ty,ssg
---

Eleventy (or 11ty) with Nunjucks is one of my favourite combinations recently. Frontend fashions come and go, but 11ty’s [performance leaderboard](https://www.11ty.dev/speedlify/) and ease of use makes it intriguing enough to give it a try.[^1]

If you haven’t heard about these, [11ty](https://www.11ty.dev/) is a simple static site generator (think Jekyll, but you can choose from a wide variety of templating languages.) [Nunjucks](https://mozilla.github.io/nunjucks/) is a powerful templating language for JavaScript, not unlike Handlebars.[^2]

## Blogs, dates, and filters

11ty is an excellent choice for blogs – and in blogs, you’ll most likely display dates. If you show dates unfiltered, they will look something like `Thu Oct 15 2020 20:12:43 GMT+0100 (British Summer Time)` – this is not bad, but you may want something simpler or more custom, like `15 October, 2020`.

Enter another favourite tool of mine, [Day.js](https://day.js.org/) – a lightweight alternative to [Moment.js](https://momentjs.com/). They do pretty much the same and have a very similar API, but Day.js comes at the fraction of the footprint.[^3]

Filters in Nunjucks are essentially functions. The syntax {% raw %}`{{ "3.14" | int }}`{% endraw %} will output `3`, because [there is a method called `int`](https://github.com/mozilla/nunjucks/blob/master/nunjucks/src/filters.js#L635) in Nunjucks’ [built-in filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters). These filters are extensible, meaning that you can write your own!

This is powerful. You can write _any_ filter now.

Let’s make one that formats dates using Day.js.

## A minimal 11ty project to get started with

Let’s set up a very simple 11ty blog, so we can add a filter later. You can use any of the [community starters](https://www.11ty.dev/docs/starter/), or do it manually:

```sh
mkdir mysite
cd mysite
yarn init -y
yarn add --dev @11ty/eleventy
```

Now, let’s create some files:

#### `index.md`
```html
---
title: Hello, world!
date: 2020-10-15
---

Anyone out there?
```

#### `package.json`
```json
"scripts": {
  "dev": "eleventy --serve --quiet"
}
```

Run `yarn dev` – there’s a simple website!

For now, it will only show the blog post text, no title or date. Let’s do something about that.

### Adding a layout to show the date and title

We can turn this into a more sophisticated blog using layouts. First, let’s create a blog post layout:

#### `_includes/layouts/blog-post.njk`
```html
{% raw %}<article>
  <h1>{{ title }}</h1>
  <time>{{ date }}</time>
  {{ content | safe }}
</article>{% endraw %}
```

If we check the site now, it will show the title and the date too! Quite an ugly date, but we’ll get to that later. But now, let’s create a **base layout** that can contain navigation, site title, footer etc. and can be used by every page on our website.

#### `_includes/layouts/base.njk`
```html
{% raw %}<!doctype html>
<html>
  <head>
    <!-- normally, we’d insert meta tags etc. here -->
    <title>My site</title>
  </head>
  <body>
    <header>
      <h1>My site</h1>
      <nav>
        <a href="/">Home</a>
        <!-- some other links… -->
      </nav>
     </header>
     <main>
       {{ content | safe }}
     </main>
  </body>
</html>{% endraw %}
```

Any template that uses the base layout, will insert its full content in the base layout’s `{% raw %}{{ content }}{% endraw %}` slot. This comes very handy, as we can make the blog post layout use the base layout:

#### `_includes/layouts/blog-post.njk`
```html
{% raw %}---
layout: layouts/base.njk
---
<article>
  <h1>{{ title }}</h1>
  <time>{{ date }}</time>
  {{ content | safe }}
</article>{% endraw %}
```

Now, you should see the title “My site”, and a link to “Home”.

### Prettier dates with a Day.js filter

We still have one problem: the blog post date looks something like `Thu Oct 15 2020 01:00:00 GMT+0100 (British Summer Time)` (this could differ based on your locale settings.) Nunjucks doesn’t have a built-in date formatter, but it supports adding one, so let’s do that!

First, we need the `dayjs` package.
```sh
yarn add --dev dayjs
```

Then, let’s create the filter:

#### `filters/nunjucks-dayjs-filter.js`
```js
const dayjs = require('dayjs')

/* defaultFormat could be any other valid dayjs format,
 * or null, in which case we’d get dayjs().format() */
const defaultFormat = 'DD MMM YYYY'

function dayjsFilter(date, format = defaultFormat) {
  return dayjs(date).format(format)
}

module.exports = dayjsFilter
```

Finally, we should register this filter so our layouts know about it. We can do this in the eleventy config file, `.eleventy.js`:

#### `.eleventy.js`
```js
module.exports = function(eleventyConfig) {
  // you may already have some other configs here
  eleventyConfig.addNunjucksFilter('date', require('./filters/nunjucks-dayjs-filter'))
}
```

Now we can use the date filter:

#### `_includes/layouts/blog-post.njk`
```diff
---
layout: layouts/base.njk
---
 <article>{% raw %}
   <h1>{{ title }}</h1>
-  <time>{{ date }}</time>
+  <time>{{ date | date('MMM D, YYYY') }}</time>
   {{ content | safe }}
 </article>{% endraw %}
```

Alternatively, we can just rely on the default format defined in the filter and omit the formatter argument:

```njk
{% raw %}{{ date | date }}{% endraw %}
```

You can read more about custom Nunjucks filters [here](https://mozilla.github.io/nunjucks/api#custom-filters). Have fun with them!

[^1]: Ok, I know that most of the time it’s third-party tracking vs performance. Easy to have 100% without analytics.  
[^2]: I stole both of these descriptions from the respective websites – I couldn’t have said it better myself.  
[^3]: To be fair, dependency size won’t actually matter in the production build, as 11ty outputs the result only. But still :)  
