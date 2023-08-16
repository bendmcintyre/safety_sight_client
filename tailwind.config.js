module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#182039',
        secondary: '#2e3449',
        accent: '#212b4e',
        dmbg: '#001f25',  // dark mode background   
        dmsdg: '#121212', // dark mode surface(dark grey)
        dmp: '#b4c5ff', // dark mode primary
        dmcont: '#244290', // dark mode primary container
        dmonp: '#012978', // dark mode on primary
        dmonpcont: '#dbe1ff', // dark mode on primary container
        dmsec: '#4fd8eb', // dark mode secondary
        dmonsec: '#00363d', // dark mode on secondary
        dmseccont: '#004f58', // dark mode secondary container
        dmonseccont: '#97f0ff', // dark mode on secondary container
        dmerror: '#ffb4ab', // dark mode error
        dmonerror: '#690005', // dark mode on error
        dmerrorcont: '#93000a', // dark mode error container
        dmerroroncont: '#ffdad6', // dark mode on error container
        dmoutline: '#9e8c90', // dark mode outline
        dms:  '#001f25', // dark mode surface
        dmscont: '#004f58', // dark mode surface container
        dmsoncont: '#97f0ff', // dark mode on surface container
        dmons: '#a6eeff', // dark mode on surface
        dmsv: '#514347', // dark mode surface variant
        dmsonv: '#d5c2c6', // dark mode on surface variant
        pass1: '#3e64ff',
        pass2: '#154D1B',
        passhover: '#278C31',
        error: '#ba1a1a', 
        onerror: '#ffffff',
        errorhover: '#FF5252',
        submit: '#3e64ff',
        subithover: '#278C31',
        edit: '#2979FF',
        edithover: '#448AFF',
        white: '#FFFFFF',
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
