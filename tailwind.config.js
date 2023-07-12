/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        YV_white:'#f1f1e3',
        YV_gry:'#aaaaaa',
        YV_dark:'#0f0f0f',
        YV_soft_dark:'#222222',
        YV_soften_dark:'#272727',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['dark']
  }
}
}
