import React, {useState, useEffect, useRef} from 'react'

import {
  AppBar, 
  Typography, 
  Backdrop, 
  Grid, 
  ButtonProps, 
  Select, 
  Paper, 
  Button, 
  Breadcrumbs, 
  IconButton, 
  Icon,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import CodeIcon from '@material-ui/icons/Code';
import AddIcon from '@material-ui/icons/Add'
import {Route, BrowserRouter, Redirect} from 'react-router-dom'

import {makeStyles} from '@material-ui/styles'

import styles from './styles/Navigation'

const useStyles = makeStyles(styles)


const Navigation = () => {
  const classes = useStyles()
  const [link, setLink] = useState()

  useEffect(() => {
    setLink(false)
  }, [link])
  
  const run = () => {
    setLink(true)
  }

  return (
    <div className={classes.root}>
        <div className={classes.toolbar}>
          <Grid container direction='row' alignItems='center' spacing={3}>
            <Grid item className={classes.title} onClick={() => run()}>
              <Typography variant='h4'>zachary thielemann</Typography>
            </Grid>
          </Grid>
        </div>
        {link ? <Redirect push to='/blog'/> : null}
    </div>

  )
}

export default Navigation