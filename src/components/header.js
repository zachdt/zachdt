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

import Footer from './email'
import Links from './links'


export default (props) => {

  useEffect(() => {
  })
  return (
    <Grid container style={{
      backgroundColor: '#002b36',
      padding: '1em'
      }} direction='row' justify="flex-start" alignItems='space-between'>
      <Grid item xs={12} style={{backgroundColor: '#002b36', color: 'white', borderColor: 'white', borderWidth: '.5em .5em 0 .5em', borderStyle: 'groove', borderRadius: '1em 1em 0 0', maxHeight: '8vh'}}>
        <marquee behavior="slide" and direction="left" scrollamount='30'>
          <Hidden smDown>
            <Typography variant='h2' style={{cursor: 'default', marginLeft: '.5em'}}>zachary thielemann</Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='h2' style={{cursor: 'default', marginLeft: '.5em'}}>zachdt</Typography>
          </Hidden>
        </marquee>
      </Grid>
      <Grid item xs={12} style={{backgroundColor: '#002b36', color: 'white', borderColor: 'white white white lightgrey', borderWidth: '0 .5em 0 .5em', borderStyle: 'dashed', minHeight: '80vh'}}>
        {props.children}
      </Grid>
      <Grid item xs={12} style={{backgroundColor: '#002b36', color: 'white', borderColor: 'white', borderWidth: '0 .5em .5em .5em', borderStyle: 'inset', minHeight: '8vh', borderRadius: '0 0 1em 1em'}}>
        <Links/>
      </Grid>
    </Grid>
  )
}
