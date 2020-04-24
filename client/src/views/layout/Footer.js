import React from 'react'

import {Grid, Typography, Hidden, IconButton, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

import styles from './styles/Footer'

const useStyles = makeStyles(styles)

const Footer = () => {

  const classes = useStyles()
  
  return (
    <div className={classes.root}>
    <br/>
      <Grid container direction='row' alignItems='flex-start'>
        <Grid item>
          <IconButton aria-label='twitter' target='__blank' href='https://twitter.com/_zachdt'>
            <TwitterIcon className={classes.social}/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label='linkedin' target='_blank' href='https://www.linkedin.com/in/zacharydavisthielemann/'>
            <LinkedInIcon className={classes.social}/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label='github' target='__blank' href='https://github.com/zachdt'>
            <GitHubIcon className={classes.social}/>
          </IconButton>
        </Grid>
      </Grid>
    </div>

  )
}

export default Footer