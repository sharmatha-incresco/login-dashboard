/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sandal : "#f2eae1",
        gold : "#f8d442",
        softskill : "#f0f9ff",
        hardskill : "#fef6fb"
      }
    },
  },
  plugins: [],
}