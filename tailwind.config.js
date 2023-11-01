/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      colors : {
        MainColor : "#0f0f0f",
        SecondaryColor : "#272727",
        BordersColor : "#323232",
        MainTextColor : "#f1f1f1",
        BlueColor : "#1cb1f5"
      },
      fontFamily : {
        Smooch : ['Smooch Sans', 'sans-serif'],
        Poppins : ['Poppins', 'sans-serif']
      }
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
}

