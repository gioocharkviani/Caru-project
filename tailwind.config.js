/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
                'Sectop1-bg': "url('/src/assets/Sectio1-bg.png')",
      }),

      fontFamily: {
        FiraGO: ["FiraGO"],
    },

    },
  },
  plugins: [],
}