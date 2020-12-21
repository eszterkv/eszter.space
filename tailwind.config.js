const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          '800': '#02f',
        },
      },
      fontFamily: {
        display: ['PT Serif', 'Oswald'],
      },
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
