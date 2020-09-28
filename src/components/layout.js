
import Head from './head'
import Header from './header'

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
      <div style={{      
        margin: 'auto',
        overflow: 'auto',
        maxWidth: '800px'
      }}>
        <Header>
          {props.children}
        </Header>
      </div>
    </ThemeProvider>
  )

}