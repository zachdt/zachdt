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


class Router extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      headline: 'zachary thielemann'
    }
  }


  render() {
    let currentLocation = window.location.pathname

    return (
      <BrowserRouter>
        <nav>
          <Typography variant="h2" color="textPrimary" align="left">
            <Link 
              to="/"
              onMouseOver={() => 
                this.setState({
                  headline: 'zachary thielemann'
                })} 
              onMouseOut={()  => {
                if (currentLocation !== '/') {
                  this.setState({
                    headline: currentLocation.substr(1)
                  })
                } else {
                  this.setState({
                    headline: 'zachary thielemann'
                  })
                }
              }}
              onClick={() =>
                this.setState({
                  headline: 'zachary thielemann'
                })}
            >{this.state.headline}</Link>
          </Typography>
        </nav>
        <div>

          <Link
            to="/software"
            onMouseOver={() => 
              this.setState({
                headline: 'software'
              })} 
            onMouseOut={()  => {
              if (currentLocation !== '/') {
                this.setState({
                  headline: currentLocation.substr(1)
                })
              } else {
                this.setState({
                  headline: 'zachary thielemann'
                })
              }
            }}
            onClick={() => 
              this.setState({
                headline: 'software'
              })}
          >
            <CodeIcon/>
          </Link>

          <Link 
            to="/music"
            onMouseOver={() => 
              this.setState({
                headline: 'music'
              })} 
            onMouseOut={()  => {
              if (currentLocation !== '/') {
                this.setState({
                  headline: currentLocation.substr(1)
                })
              } else {
                this.setState({
                  headline: 'zachary thielemann'
                })
              }
            }}
            onClick={() => 
              this.setState({
                headline: 'music'
              })}
          >
            <MusicNoteIcon/>
          </Link>

          <Link 
            to="/contact"
            onMouseOver={() => 
              this.setState({
                headline: 'contact'
              })} 
            onMouseOut={()  => {
              if (currentLocation !== '/') {
                this.setState({
                  headline: currentLocation.substr(1)
                })
              } else {
                this.setState({
                  headline: 'zachary thielemann'
                })
              }
            }}
            onClick={() => 
              this.setState({
                headline: 'contact'
              })}
          ><EmailIcon/></Link>
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
}

export default Router