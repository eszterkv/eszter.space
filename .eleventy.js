const hljs = require('highlight.js')
const pluginRss = require('@11ty/eleventy-plugin-rss')

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
  const markdownLib = markdownIt(options).use(require('markdown-it-footnote'))

  config.setLibrary('md', markdownLib)

  return {
    templateFormats: ['md', 'njk', 'jpg', 'png', 'gif'],
  }
}
