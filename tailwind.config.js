/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { // Ensure that 'colors' is used here
        // 'custom-green': '#10941AB5',
        'custom-green': '#399b53 ',
        
        'custom-dark-green': '#12871bb5' // Your custom color
      }
    },
  },
  plugins: [],
}
