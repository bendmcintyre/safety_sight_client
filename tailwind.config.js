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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
