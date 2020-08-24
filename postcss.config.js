const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

const plugins = [
  purgecss({
    content: ['*/**/*.html']
  }),
  cssnano()
]

module.exports = {
  plugins
}
