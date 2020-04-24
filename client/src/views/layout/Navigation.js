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

//BOILERPLATE HOOK FOR HOVER
function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}
///


const Navigation = () => {
  const classes = useStyles()
  const [link, setLink] = useState()

  if (link && link !== '/') return (
    <BrowserRouter>
        <Redirect to={link}/>
    </BrowserRouter>
  )
  return (
    <div className={classes.root}>
     <BrowserRouter>
        <Route render={({location}) => (
          <div className={classes.toolbar}>
            <Grid container direction='row' alignItems='center' spacing={3}>
              <Grid item className={classes.title} onClick={() => setLink('/')}>
                <Typography variant='h4'>zachary thielemann</Typography>
              </Grid>
            </Grid>
          </div>
        )} />
      </BrowserRouter>
    </div>

  )
}

export default Navigation