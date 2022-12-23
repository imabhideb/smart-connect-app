/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Login: ['Martian Mono', 'monospace'],
        Connect: ['Kaushan Script', 'cursive'],
        SmartLogo: ['Arizonia', 'cursive'],
        SignUp: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}
