module.exports = function(config) {
  config.addPassthroughCopy({ public: './' })
  config.addPassthroughCopy('./css/styles.css')

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
  })

  const markdownIt = require('markdown-it')
  const options = {
    html: true,
    linkify: true,
    typographer: true,
  }
  const markdownLib = markdownIt(options)
  config.setLibrary('md', markdownLib)

  return {
    templateFormats: ['md', 'njk', 'jpg', 'png', 'gif'],
  }
}
