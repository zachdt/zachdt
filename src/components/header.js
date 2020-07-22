import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {
  Typography, 
  Grid, 
  Hidden,
  IconButton,
  Box,
  Container
} from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

export default () => {

  const [id, setId ] = useState('primary')

  useEffect(() => {
  })
  return (
    <Grid container style={{
      padding: '0em',
      backgroundColor: 'black'
      }} direction='column' justify="center" alignItems='center'>
      <Grid item>
        <Hidden mdDown>        
          <Link href={'/'}>
            <Typography variant='h1' color={id} >zach thielemann</Typography>
          </Link>
        </Hidden>
        <Hidden lgUp>
          <Link href={'/'}>   
            <Typography variant='h1' color={id} >zachdt</Typography>
          </Link>
        </Hidden>
      </Grid>
    </Grid>
  )
}
