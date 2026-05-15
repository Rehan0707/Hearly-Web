/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#C8EF44',
          blue: '#3ca2fa',
        },
      },
    },
  },
  plugins: [],
}
