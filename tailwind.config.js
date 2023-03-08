/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      primary: "#dd5903",
      secondary: "#fff",
      bodyBackground: "#0e0d0a"
    },
    screens: {
      // 'dextop': {'min': '1279px'},
      'lg': {'min': '1024px',},
      'md': {'min':'768px', 'max': '1023px'},
      'sm': {'max': '767px'},
    },
    
    extend: {
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      // fontFamily: {
      //   'jost': ["Jost", sans-serif],
      //   'cormorant': ['Cormorant Garamond', serif],
      // },
    },
  },
  plugins: [],
}
