/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5ECDC',
        espresso: '#2E1A10',
        terracotta: '#B1552F',
        warmbrown: '#8A6D52',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(46, 26, 16, 0.08)',
      },
    },
  },
  plugins: [],
};
