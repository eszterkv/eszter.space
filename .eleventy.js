var hljs = require('highlight.js')

module.exports = function(config) {
  config.addPassthroughCopy({ public: './' })
  config.addPassthroughCopy('./css/highlight.css')
  config.addPassthroughCopy('./css/styles.css')

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
  markdownLib.renderer.rules.footnote_block_open = () => (
    '<h4 class="mt-10">Footnotes</h4>\n' +
    '<ol class="list-decimal text-sm pl-5">\n'
  );

  config.setLibrary('md', markdownLib)

  return {
    templateFormats: ['md', 'njk', 'jpg', 'png', 'gif'],
  }
}
