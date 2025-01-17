module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/public/images/loginbg.png')",
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#10B981",
        background: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
