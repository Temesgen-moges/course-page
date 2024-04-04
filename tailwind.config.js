/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightColor: "#F4511F",
        backgroundColor: "#b7bca9",
        lightText: '#959595',
        'custom-blue': 'rgba(157, 204, 255, 1)',
        'custom-blue-text': 'rgba(73,187,189,1)',
      }
    },
  },
  plugins: [],
};
