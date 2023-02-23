/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
                'Section1-bg': "url('/src/assets/Sectio1-bg.png')",
                'Section2-bg': "url('/src/assets/Section2-bg.png')",
                'Section4-bg': "url('/src/assets/Sec4Bg.png')",
                'Section6-bg': "url('/src/assets/Sectio6-bg.png')",
                'Bg3': "url('/src/assets/Sec1Bg.png')"
      }),

      fontFamily: {
        FiraGO: ["FiraGO"],
    },

    },
  },
  plugins: [],
}