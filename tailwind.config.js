/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {theme: {
  extend: {
    animation: {
      'slide-down': 'slideDown 0.3s ease-out forwards',
    },
    keyframes: {
      slideDown: {
        '0%': { opacity: 0, transform: 'translateY(-10%)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
  },
},

      colors: {
        bneGreen: '#7b944a',
        bneBeige: '#f9f8f4',
      },
    },
  },
  plugins: [],
}
