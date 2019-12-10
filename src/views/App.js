import React from 'react'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import Router from './Router'
import Footer from './Footer'

function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Router />
        <Footer />
      </Box>
    </Container>
  )
}

export default App;
