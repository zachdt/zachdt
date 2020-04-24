import React from 'react';

import Layout from './layout/Layout'
import Routes from '../router/Routes'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f5f5f5'
    },
    secondary: {
      main: '#424242',
    },
    error: {
      main: '#c2c2c2',
    }
  }
})

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Layout>
          <Routes/>
        </Layout>
      </MuiThemeProvider>
    </div>
  )
}

export default App
