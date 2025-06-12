/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1470&q=80')",
        'rooms': "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80')",
        'about': "url('https://images.unsplash.com/photo-1542317854-8d1c7f3e0d6d?auto=format&fit=crop&w=1470&q=80')",
      },
      colors: {
        primary: '#FF5A5F',
        secondary: '#484848',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
