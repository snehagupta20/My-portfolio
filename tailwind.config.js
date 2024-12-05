/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        'lightGreen' : "#2e5e63",
        'green' : "#073a43",
        'darkGreen' : "#022a30",
        'my-yellow' : "#e0f780",
        'offWhite' : "#eef3db",
        'lightGray' : "#b6cbce",
      },
      boxShadow: {
        'yellow-shadow' : '-5px 5px 0 1px rgb(224, 247, 128)',
      }
    },
  },
  plugins: [],
}

