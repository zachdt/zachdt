import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { Box, Typography } from '@material-ui/core'

import CodeIcon from '@material-ui/icons/Code'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import EmailIcon from '@material-ui/icons/Email';

import Landing from './Landing'
import Software from './Software'
import Music from './Music'
import Contact from './Contact'

const Router = () => {
  return (
    <BrowserRouter>
      <nav>
      <Typography variant="h2" color="textPrimary" align="left">
        <Link to="/">Zachary Thielemann</Link>
      </Typography>
      </nav>
      <div>
        <Link to="/software"><CodeIcon/></Link>
        <Link to="/music"><MusicNoteIcon/></Link>
        <Link to="/contact"><EmailIcon/></Link>
      </div>

      <Switch>
        <Route exact path="/"><Landing /></Route>
        <Route path="/software"><Software /></Route>
        <Route path="/music"><Music /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router