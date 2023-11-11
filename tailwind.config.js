/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '730px' },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'sb-charcoal': {
          100: '#323946',
          200: '#1f242d',
        },
        'sb-sky-blue': {
          100: '#00a6fb',
          200: '#0582ca',
          300: '#006494',
        },
      },
      boxShadow: {
        button: '0 0 1rem',
        search: '0 0 2rem',
        header: '0 1rem 1rem',
      },
      animation: {
        blink: 'blink 1s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
