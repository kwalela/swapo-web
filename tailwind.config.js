/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Includes src folder just in case
  ],
  theme: {
    extend: {
      colors: {
        // SWAPO Brand Identity
        swapo: {
          red: '#CE1126',    // Urgent / CTA / Flag Red
          blue: '#003580',   // Heritage / Header / Flag Blue
          green: '#009543',  // Youth / Growth / Flag Green
          yellow: '#FFCD00', // Accent / Stars
        },
        neutral: {
          100: '#F5F5F5', 
          900: '#1A1A1A', 
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'], 
        heading: ['var(--font-montserrat)'], 
      },
    },
  },
  plugins: [],
}