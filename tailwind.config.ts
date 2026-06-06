import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111827',
        cloud: '#f8fafc',
        signal: '#0f766e',
        ember: '#f97316',
      },
      boxShadow: {
        soft: '0 20px 60px -35px rgb(15 23 42 / 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
