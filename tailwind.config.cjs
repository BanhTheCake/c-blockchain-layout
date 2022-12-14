/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackThin' : 'rgb(256, 256, 256)'
      },
      maxWidth: {
        'semiFull': 'calc(100% - 1rem)'
      },
      keyframes: {
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(100%)',
                    transform: 'translateX(100%)'
          },
          '100%': {
            '-webkit-transform':' translateX(0)',
                    transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'slideLeft': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
      }
    },
  },
  plugins: [],
}