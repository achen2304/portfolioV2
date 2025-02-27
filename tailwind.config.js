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
        'grid-pattern-dark': `linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)`,
        'grid-pattern-light': `linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px)`,
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
        dark: {
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
        light: {
          primary: '#000000',
          secondary: '#1e293b',
          accent: '#0f172a',
          neutral: '#e5e7eb',
          'base-100': '#e5e7eb',
          info: '#000000',
          success: '#15803d',
          warning: '#eab308',
          error: '#dc2626',
        },
      },
    ],
  },
};
