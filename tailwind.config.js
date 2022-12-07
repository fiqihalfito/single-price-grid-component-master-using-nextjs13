/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(179, 62%, 43%)",
          brightYellow: "hsl(71, 73%, 54%)"
        },
        neutral: {
          lightGray: "hsl(204, 43%, 93%)",
          grayishBlue: "hsl(218, 22%, 67%)"
        }
      },
      fontFamily: {
        karla: ['"Karla"']
      }
    },
  },
  plugins: [],
}
