/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)', // Dark Mode Text & Light Mode Elements
        'very-light-gray': 'hsl(0, 0%, 97%)', // Light Mode Background
        'dark-blue': 'hsl(209, 23%, 22%)', // Dark Mode Elements
        'dark-gray': 'hsl(0, 0%, 52%)', // Light Mode Input
        'very-dark-blue-light': 'hsl(200, 15%, 8%)', //Light Mode Text
        'very-dark-blue-dark': 'hsl(207, 26%, 17%)' // Dark Mode Background
      }
    },
    fontFamily: {
      serif: ['Nunito Sans', 'sans-serif']
    },
    fontWeight: {
      light: 300,
      semibold: 600,
      extrabold: 800
    }
  },
  plugins: []
}
