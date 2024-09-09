/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jacarta': {
          '50': '#f0f1fd',
          '100': '#e4e6fb',
          '200': '#cdd0f8',
          '300': '#afb2f2',
          '400': '#938fea',
          '500': '#7e73e1',
          '600': '#6f58d3',
          '700': '#6049b9',
          '800': '#4f3d96',
          '900': '#382f65',
          '950': '#282145',
        },
      },
    },
  },
  plugins: [],
}
