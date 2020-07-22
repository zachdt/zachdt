
import { createMuiTheme } from '@material-ui/core'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#00e676'
    },
    background: {
      default: '#fffff'
    },
    text: {
      main: '#aa00ff'
    },
    error: {
      main: '#757ce8' 
    },
  },
  typography: {
    fontFamily: 'Racing Sans One',
    h1: {
      fontSize: 100,
    },
    h2: {
      fontSize: 40
    },
    h6: {
      fontWeight: 400,
    },
    body1: {
      fontWeight: 400,
      fontFamily: 'Open Sans'
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
