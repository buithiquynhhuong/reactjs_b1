/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // điều chỉnh kích thước, màu sắc, font chữ ở đây
      padding: {
        "header-padding": "30px",
      },
    },
  },
  plugins: [],
};
