/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        machina: ['Aeonik',"sans-serif"],
        helvetica:['Helvetica',"sans-serif"]
        // Add more custom font families as needed
      }
    }
  },
  plugins: [],
}
