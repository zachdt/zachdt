
import Head from './head'
import Header from './header'
import Footer from './footer'

import {ThemeProvider} from '@material-ui/core/styles'

import {
  Typography, 
  Grid, 
  Hidden,
  IconButton
} from '@material-ui/core'


import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'


export default (props) => {
  if (props.isLoad) {
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head {...props} />
      {props.children}
    </ThemeProvider>
    )
  }
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Head {...props} />
    <Header/>
    <main>
      <div style={{backgroundColor: 'white', padding: '1em', paddingBottom: '2em'}}>
        {props.children}
      </div>
    </main>
    <footer style={{backgroundColor: 'white', width: '100%', position: 'static', bottom: '0'}}>
      <Footer/>
    </footer>
  </ThemeProvider>
  )

}