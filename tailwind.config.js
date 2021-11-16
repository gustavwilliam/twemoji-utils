const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          twitter: {
            DEFAULT: "#1DA1F2",
            dark: "#0d8ddb",
          }
        }
      },
    },
  },
  variants: {
    extend: {
      padding: ['first', 'last'],
      borderRadius: ['first', 'last'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
