/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          1: "#8d81a5",
          2: "#091292"
        }
      }
    },
  },
  plugins: [],
}

