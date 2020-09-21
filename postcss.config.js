const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['*/**/*.html']
    }),
    require('cssnano'),
    require('postcss-import'),
    require('autoprefixer'),
  ],
}
