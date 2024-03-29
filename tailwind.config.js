/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '500px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1440px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1920px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'transparent': 'transparent',
        'blue-50': '#e6f2f2',
        'blue-100': '#b0d8d8',
        'blue-200': '#8ac5c5',
        'blue-300': '#54aaaa',
        'blue-400': '#339999',
        'blue-500': '#008080',
        'blue-600': '#007474',
        'blue-700': '#005b5b',
        'blue-800': '#004646',
        'blue-900': '#003636',
        'black-50': '#e8e9e9',
        'black-100': '#b9bbba',
        'black-200': '#979a99',
        'black-300': '#676c6a',
        'black-400': '#494f4d',
        'black-500': '#1c2321',
        'black-600': '#19201e',
        'black-700': '#141917',
        'black-800': '#0f1312',
        'black-900': '#0c0f0e',
        'white-50': '#ffffff',
        'white-100': '#ffffff',
        'white-200': '#ffffff',
        'white-300': '#ffffff',
        'white-400': '#ffffff',
        'white-500': '#ffffff',
        'white-600': '#e8e8e8',
        'white-700': '#b5b5b5',
        'white-800': '#8c8c8c',
        'white-900': '#6b6b6b',
        'nav-light': 'rgba(252, 255, 252, .9)',
        'nav-dark': 'rgba(0, 0, 0, .9)',
        'dialog-bg': 'rgba(0, 0, 0, .3)',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'monospace'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'tiny': '12px',
        'base': '16px',
        'lg': '20px',
        'xl': '22px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '45px',
        '7xl': '57px',
      },
      fontWeight: {
        'hairline': 100,
        'extra-light': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'extra-bold': 800,
        'black': 900,
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'full': '9999px',
        'large': '12px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        1: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        2: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        3: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        4: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        5: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        6: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        7: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        8: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        9: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        10: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        11: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        12: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        13: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
        14: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        15: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        16: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        17: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
        18: 'rgba(0, 0, 0, 0.1) 0 4px 4px 0px',
        19: 'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
        20: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        21: 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px',
        22: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
        23: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
        24: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
      },
    },
  },
  plugins: [],
};
