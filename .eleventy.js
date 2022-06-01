const hljs = require('highlight.js')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const uslug = require('uslug')

module.exports = function(config) {
  config.addPassthroughCopy({ public: './' })
  config.addPassthroughCopy('./css/')
  config.addNunjucksFilter('date', require('./nunjucks-dayjs-filter'))
  config.addPlugin(pluginRss)

  const highlight = (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (_) {}
    }
    return ''
  }

  const markdownIt = require('markdown-it')
  const options = {
    html: true,
    linkify: true,
    typographer: true,
    highlight,
  }
  const markdownLib = markdownIt(options)
    .use(require('markdown-it-footnote'))
    .use(
      require('markdown-it-anchor'),
      {
        level: [1, 2, 3],
        permalink: true,
        permalinkSymbol: '*',
        slugify: s => uslug(s),
      },
    )

  config.setLibrary('md', markdownLib)

  return {
    templateFormats: ['md', 'njk', 'jpg', 'jpeg', 'png', 'gif', 'svg', 'pdf', 'webp'],
  }
}
