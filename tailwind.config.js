module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#182039',
        secondary: '#2e3449',
        accent: '#212b4e',
        pass1: '#3e64ff',
        pass2: '#154D1B',
        passhover: '#278C31',
        fail1: '#E81105',
        fail2: '#E63307',
        failhover: '#BF2B06',
        submit: '#3e64ff',
        gradient: {
          start: '#182039', 
          mid: '#010442', 
          end: '#182039'
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
