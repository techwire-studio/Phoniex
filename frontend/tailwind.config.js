/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
      colors:{
        "home-bg": "#F8FC34",
        'home-bg-black': "#282829",
        'sub-text-best': "#808080",
        'team-company': "#909090",
        'arrivals-rating': "#666666",
        'awards-text': "#323232",
        'discount-bg': "#F55151"

      },
      
      
     
    },
  },
  plugins: [],
}

