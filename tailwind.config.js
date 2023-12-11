/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          vibefont: ['Dancing Script', 'cursive', 'sans'],
        },  
    },
  },
  plugins: [],
}