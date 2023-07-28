/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      boxShadow: {
        'top': 'inset 0 4px 6px 0 rgba(0, 0, 0, 0.1)',
      },
      colors: {
        color1: '#B74B80',
        color2: '#E54167',
        color3: '#D5F0FF',
        color4: '#B4DEF3',
      },
      // fontFamily: {
      //   'sans': ['Open Sans Pro', ...defaultTheme.fontFamily.sans],
      // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
