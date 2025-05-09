/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ["Fredoka", "sans-serif"],
        'dd': ["Sixtyfour Convergence", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
