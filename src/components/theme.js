
import { createMuiTheme } from '@material-ui/core'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#757ce8'
    },
    background: {
      default: '#fff'
    },
    text: {
      secondary: '#aa00ff'
    },
    error: {
      main: '#00c853'
    }
  },
  typography: {
    fontFamily: 'Racing Sans One',
    h1: {
      fontSize: 100,
    },
    h2: {
      fontSize: 60
    },
    body1: {
      fontWeight: 500,
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
