/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
                'Section1-bg': "url('/src/assets/Sectio1-bg.png')",
                'Section2-bg': "url('/src/assets/Section2-bg.png')"
      }),

      fontFamily: {
        FiraGO: ["FiraGO"],
    },

    },
  },
  plugins: [],
}