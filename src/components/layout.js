
import Head from './head'
import Header from './header'
import Footer from './footer'
import Link from 'next/link'

import {ThemeProvider} from '@material-ui/core/styles'

import {
  Typography, 
  Grid, 
  Hidden,
  IconButton
} from '@material-ui/core'


import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'


export default (props) => (
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head {...props} />
      <Header/>
      <main>
        <div style={{backgroundColor: '#000000', padding: '1em', paddingBottom: '2em'}}>
          {props.children}
        </div>
      </main>

      <footer style={{backgroundColor: 'white', width: '100%', position: 'static', bottom: '0'}}>
        <Footer/>
      </footer>
  </ThemeProvider>
)