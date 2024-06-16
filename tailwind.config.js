/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#010101'
      },
      backgroundImage: {
        'base-100-gradient': "radial-gradient(at center, #2D102C, #010101)",
        'dark': '#0a0205'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

}
