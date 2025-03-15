// This file initializes Tailwind with our custom configuration
// It should be loaded after the Tailwind CDN script but before any other JS

tailwind.config = {
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
  }
} 