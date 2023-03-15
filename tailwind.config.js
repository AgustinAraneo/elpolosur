/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    backgroundImage: {
      'home': "url('https://i.postimg.cc/y1FV6F9C/prueba4.jpg')",
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
