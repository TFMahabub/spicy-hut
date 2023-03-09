/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#dd5903",
      secondary: "#fff",
      bodyBackground: "#0e0d0a"
    },
    
    extend: {
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        'sm': '1rem',
        'md': '2rem',
      },
      backgroundImage: {
        'banner_background_image': "url('../public/assats/bannerImage.jpg')",
        'selected_menus_background_image': "url(../public/assats/selectedMenus.jpg)",
      }
    },
  },
  plugins: [],
}
