/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'slide-right': 'slideRight 1s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      perspective: {
        'none': 'none',
        '1000': '1000px',
      },
      rotate: {
        'y-12': '12deg',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};