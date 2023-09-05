/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // orangeColorBackground : "#ffeee5",
        // orangeColorBackground : "#FDDC5C",
        orangeColorBackground : "#f0d571",
        lightOverlay:"#ffffff77",
        secondaryColor : "#155264 ",
        thirdColor : "#191D88",
      }
    },
  },
  plugins: [],
}
