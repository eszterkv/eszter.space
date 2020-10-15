---
title: Custom filters for Nunjucks templates in 11ty
date: 2020-10-14
---

11ty with Nunjucks is one of my favourite combinations recently. Frontend fashions come and go, but 11ty’s [performance leaderboard](https://www.11ty.dev/speedlify/) and ease of use makes it intriguing enough to give it a try.[^1] If you haven’t heard about these, [11ty](https://www.11ty.dev/) is a simple static site generator (think Jekyll, but you can choose from a wide variety of templating languages.) [Nunjucks](https://mozilla.github.io/nunjucks/) is a powerful templating language for JavaScript, not unlike Handlebars.[^2]

## Blogs, dates, and filters

11ty is an excellent choice for blogs – and in blogs, you’ll most likely display dates. If you show dates unfiltered, they will look something like `Thu Oct 15 2020 20:12:43 GMT+0100` – this is not bad, but you may want something simpler or more custom, like `15 October, 2020`.

Enter another favourite tool of mine, [Day.js](https://day.js.org/) – a lightweight alternative to [Moment.js](https://momentjs.com/). They do pretty much the same and have a very similar API, but Day.js comes at the fraction of the footprint.[^3]

Filters in Nunjucks are essentially functions. The syntax `{{ "3.14" | int }}` will output `3`, because [there is a method called `int`](https://github.com/mozilla/nunjucks/blob/master/nunjucks/src/filters.js#L635) in Nunjucks’ [built-in filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters). These filters are extensible, meaning that you can write your own!

This is powerful. You can write _any_ filter now! Let’s make one that formats dates using Day.js.

## A minimal 11ty project to get started with

Let’s set up a very simple 11ty blog, so we can add a filter later. You can use any of the [community starters](https://www.11ty.dev/docs/starter/), or do it manually:

```sh
mkdir foo
cd foo
yarn init -y
yarn add --dev @11ty/eleventy
touch index.md
```

Now, open `index.md` in your preferred editor and paste this content:
```njk
---
title: Hello, world!
date: 2020-10-15
---

Anyone out there?
```

Open up `package.json` to add the script to run a dev server:
```json
"scripts": {
  "dev": "eleventy --serve --quiet"
}
```

- this guide assumes an 11ty site using nunjucks templates (link to both)
- instructions to set up a minimal 11ty+njk project

```
yarn add --dev dayjs
```

Run `yarn dev` – there’s a simple website!

### Adding a template to show the date and title

### the code

#### .eleventy.js
```js
module.exports = function(eleventyConfig) {
  // you may already have some other configs here
  eleventyConfig.addNunjucksFilter('date', require('./nunjucks-dayjs-filter'))
}
```

#### nunjucks-dayjs-filter.js
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

### usage
!! todo add outputs with the above config
```njk
{{ post.data.date.toUTCString() | date }}
```

or 
```njk
{{ post.data.date.toUTCString() | date('MMM D, YYYY') }}
```

[^1]: Ok, I know that most of the time it’s third-party tracking vs performance. Easy to have 100% without analytics.  
[^2]: I stole both of these descriptions from the respective websites – I couldn’t have said it better myself.  
[^3]: To be fair, dependency size won’t actually matter in the production build, as 11ty outputs the result only. But still :)  
