/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0205',
      },
      backgroundImage: {
        'base-100-gradient': "radial-gradient(at center, #2D102C, #010101)",
        dark: '#0a0205',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        darktDaisy: {
          "primary": '#64ffda',
          "secondary": '#ffffff',
          "accent": "#000000",
          "neutral": '#0a192f',
          'base-100': '#101214',
          
          
        },
      },
      {
        lightDaisy: {
          "primary": "#a41abd",
          "secondary": "#000000",
          "accent": '#ffffff',
          "neutral": "#3d4451",
          "base-100": "#fbfbfb",


        },
      },
    ],
  },
}
