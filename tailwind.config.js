/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        base: ['"Tektur, cursive"']
      },
      backgroundImage:{
        'hero-bg':"url('https://unsplash.com/photos/xrVDYZRGdw4')"
      },
      spacing: {
        '108': '32rem',
      }
    },
  },
  plugins: [],
}