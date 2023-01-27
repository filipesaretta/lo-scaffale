/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-coral': '#EE7674',
        'maximum-blue-green': '#75B9BE',
        'rich-black': '#011627',
        'yellow-orange': '#FBB13C',
        'lavender-blue-400': '#D1C9FF',
        'lavender-blue-800': '#A899FF',
      },
    },
  },
  plugins: [],
}
