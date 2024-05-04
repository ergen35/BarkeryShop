/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#973499",
        "secondary": '#CE44E4',
        "tertiary": "#374957"
      }
    },
  },
  plugins: [],
}

