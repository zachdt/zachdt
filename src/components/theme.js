
import { createMuiTheme } from '@material-ui/core'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000'
    },
    background: {
      default: '#002b36'
    },
    text: {
      main: '#aa00ff'
    },
    error: {
      main: '#757ce8' 
    },
  },
  typography: {
    fontFamily: 'Monofett',
    h1: {
      fontSize: 100,
    },
    h2: {
      fontSize: 40
    },
    h3: {
      fontSize: 30
    },
    h6: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 400,
      fontFamily: 'Comfortaa'
    },
    body2: {
      fontWeight: 200,
      fontFamily: 'Comfortaa'
    },
    p: {
      fontFamily: 'Open Sans'
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

export default theme
