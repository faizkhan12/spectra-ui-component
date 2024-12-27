/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
