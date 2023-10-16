/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#E6E7EC",
        grayColor: "#828282",
        blackColor: "#101828",
        mainColor: "#32D583",
        greenColor: "#32D583",
        lightGray: "#F2F2F2",
        veryLightGray: "#FDFDFD",
        thinGray: "#E6E7EC",
        lightGreen: "rgb(236, 253, 243)",
      },
    },
  },
  plugins: [],
};
