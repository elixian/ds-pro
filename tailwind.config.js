
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  theme: {

    extend: {
      fontFamily:{
        'sans':["Roboto", "sans-serif"],
      },
      boxShadow: {
        'custom-inner': 'inset 0 0 0 20px #fff'
      },
      maxWidth: {
        '109': '109px',
      }
    }

  }
}
