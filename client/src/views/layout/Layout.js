import React, {useState, useEffect} from 'react'

import {Typography, Grid, CircularProgress} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import {withRouter, BrowserRouter} from 'react-router-dom'

import Navigation from './Navigation'
import Footer from './Footer'
import styles from './styles/Layout'

const useStyles = makeStyles(styles)

const Layout = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.page}>
        <BrowserRouter>
          <Grid container direction='row' >
            <Grid item xs={12} sm={4} md={3} container direction='column' alignItems='flex-start'>
              <Grid item>
                <Navigation />
              </Grid>
              <Grid item>
                <Footer />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8} md={9} className={classes.route}>
              {props.children}
            </Grid>
          </Grid>
        </BrowserRouter>
      </div>
    </div>  
  )
}

export default Layout