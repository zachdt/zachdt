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

  const [id, setId ] = useState('textPrimary')

  useEffect(() => {
  })
  return (
    <Grid container style={{
      padding: '0em',
      backgroundColor: 'white',
      padding: '.4em'
      }} direction='column' justify="center" alignItems='center'>
      <Grid item>
        <Hidden mdDown>        
          <Link href={'/'}>
            <Typography variant='h1' color={id} style={{cursor: 'default'}}>zachary thielemann</Typography>
          </Link>
        </Hidden>
        <Hidden lgUp>
          <Link href={'/'}>   
            <Typography variant='h1' color={id} style={{cursor: 'default'}}>zachdt</Typography>
          </Link>
        </Hidden>
      </Grid>
    </Grid>
  )
}
