import React from 'react'

import {Typography} from '@material-ui/core'
import 'aframe'
import 'aframe-particle-system-component'
import {Entity, Scene} from 'aframe-react'

import Navigation from './Navigation'

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>  
  )
}

export default Layout