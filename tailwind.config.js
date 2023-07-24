module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundGradient: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-custom': 'linear-gradient(180deg, var(--tw-gradient-stops))',
      }),
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        background: '#083340',
        primary: '#58B1CC',
        secondary: '#116680',
        accent: '#FFFFFF',
        pass1: '#239972',
        pass2: '#154D1B',
        passhover: '#278C31',
        fail1: '#E81105',
        fail2: '#E63307',
        failhover: '#BF2B06',
        submit1: '#58B1CC',
        submit2: '#1694BA',
        gradient: {
          start: '#1f222c', 
          mid: '#3333ff', 
          end: '#1f222c'
        }
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Roboto Slab', 'serif'],
        'mono': ['Roboto Mono', 'monospace'],
        'display': ['Roboto Slab', 'serif'],
        'body': ['Roboto', 'sans-serif']
      },
       fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      boxShadow: {
      default:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      nebackground:
        'inset 1px 1px 3px #072b36,9px 9px 20px #083340,-0px -0px 20px #093b4a',
      neumorphismlight:
        'inset 1px 1px 5px #fff, 9px 9px 20px rgba(222, 222, 222, 0.8),-0px -0px 20px #ffffff',
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
