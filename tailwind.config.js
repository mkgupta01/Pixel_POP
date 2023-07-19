/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      'dark-purple':'30011E',
      'tea-green':'D7FCD4',
      'celadon':'B6CCA1',
      'dark-goldenred':'B68F40',
      'davy-gray':'545454'
    },
    extend: {
      fontFamily: {
        base: ['"Tektur, cursive"']
      }
    },
  },
  plugins: [],
}