---
title: Custom filters for Nunjucks templates in 11ty
date: 2020-10-14
---

### intro

- what are we trying to achieve (pretty filters but lightweight)
- why 11ty, why njk, why dayjs? alternatives to dayjs (link to moment njk libraries on npmjs) – note about this actually not mattering for a prod build because the date lib is only a dev dependency, so it won't add to the production weight, but we like dayjs and want to support it
- how do filters work in njk and similar templating languages (show some examples in njk)

### installation & pre-requisites

- this guide assumes an 11ty site using nunjucks templates (link to both)
- instructions to set up a minimal 11ty+njk project

```
yarn add --dev dayjs
```

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
