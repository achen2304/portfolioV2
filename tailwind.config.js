/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'deep-black': '#000000',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffffff',
          secondary: '#e2e8f0',
          accent: '#f8fafc',
          neutral: '#000000',
          'base-100': '#000000',
          info: '#ffffff',
          success: '#ffffff',
          warning: '#ffffff',
          error: '#ffffff',
        },
      },
    ],
  },
};
