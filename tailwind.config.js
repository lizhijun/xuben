/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#D97706', // amber-600
          'dark': '#B45309',  // amber-700
          'light': '#FCD34D', // amber-300
        }
      },
      fontFamily: {
        'sans': ['Noto Sans SC', 'sans-serif'],
        'serif': ['Noto Serif SC', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
        // Default Tailwind breakpoints
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideUp': 'slideUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('../images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
} 