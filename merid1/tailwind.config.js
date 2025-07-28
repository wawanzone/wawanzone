/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    '*.{html,js,php}',
    'components/*.{html,js,php}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Judson"],
      },
      safelist: [
        'bg-gray-900',
        'bg-opacity-50',
        'inset-0',
        'ascending',
        'descending'
      ],
      colors: {
        'theme': {
          100: '#F8F7F3',
          200: '#f3f0e8',
          300: '#A79E8F',
          400: '#8F8171',
          500: '#766954',
          600: '#c46440',
          700: '#742121',
          800: '#294737',
          900: '#3B4C62',
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

