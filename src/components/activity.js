import React, {useEffect, useState} from 'react'

import {
  Paper,
  Grid,
  Typography,
  CircularProgress
} from '@material-ui/core'

import {Chart} from 'react-google-charts'


const Activity = () => {

  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='h2' color='error'>Activity</Typography>
      </Grid>
      <Grid item>
        <br/>

      </Grid>
    </Grid>
  )
}

export default Activity