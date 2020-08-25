module.exports = function(config) {
  config.addPassthroughCopy({ public: './' })
  config.addPassthroughCopy('./css/styles.css')

  const markdownIt = require('markdown-it')
  const options = {
    html: true,
    linkify: true,
    typographer: true,
  }
  const markdownLib = markdownIt(options)
    .use(require('markdown-it-footnote'))
  config.setLibrary('md', markdownLib)

  return {
    templateFormats: ['md', 'njk', 'jpg', 'png', 'gif'],
  }
}
