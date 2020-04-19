import React from 'react'

import {Grid, Typography} from '@material-ui/core'

const Footer = () => {
  return (
    <Grid container direction='row'>
      <Grid item xs={12} md={6}>
        <Typography variant='h4'>&copy;2020 zachdt</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        
      </Grid>
    </Grid>
  )
}

export default Footer