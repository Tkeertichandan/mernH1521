/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0088cc",
        green: "#0088cc",  // Telegram blue
        green_100: "#D0EAF8",  // A lighter shade of Telegram blue
        gray_100: "#6C7278",
        text: "#222222",
        
      },
      boxShadow: {
        s1: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
        s2: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        s3: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      
    },
  },
  plugins: [],
};


