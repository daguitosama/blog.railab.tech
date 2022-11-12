const defaultTheme = require('tailwindcss/defaultTheme')
const twColors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {

    colors: {
      // tw colors
      ...twColors,

      // design colors
      primary: {
        on: {
          light: {
            base: '#2563EB'
          }
        }
      },
      type: {
        on: {
          light: {
            base: '#292929',
            dimmed: '#757575'
          }
        }
      },
      light: {
        base: '#fff',
        elevation: '#E6E6E6'
      },
      dark: {
        base: '#1D1F22' // apple dark mode solid bg
        // google dark mode bg (nice to) 
        // 202124
      }
    },


    extend: {

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        // mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
        // source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
    },

  },
  plugins: [],
}
