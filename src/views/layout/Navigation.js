import React, {useState, useEffect} from 'react'

import {Typography, Backdrop, Grid, ButtonProps, Select, MenuItem, Button, Breadcrumbs, link} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import styles from './styles/Navigation'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(styles)

const Navigator = (props) => {
  const classes = useStyles()

  const [route, setRoute] = useState()

  useEffect(() => {
    setRoute(props.path)  
  }, [props.path])

  if (props.path === '/') {
    return (
      <div>
        <Grid container direction='row' justify='flex-start' alignItems='center' spacing={0} className={classes.container}>
          <Grid item xs={12} md={3}>
            <Typography variant='h4'>Zachary Thielemann</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Grid>
        </Grid>
      </div>
    )
  }
  return (
    <div>
      <Typography variant='h4' >Zachary Thielemann</Typography>
    </div>
  )
}


const Navigation = () => {
  const classes = useStyles()

  return (
    <div>
    </div>
  )
}

export default Navigation