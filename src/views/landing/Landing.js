import React, {useState, useEffect} from 'react'

import {Typography} from '@material-ui/core'
import 'aframe';
import 'aframe-particle-system-component'
import {Entity, Scene} from 'aframe-react'

import {Cursor} from './Cursor'

import __html from './engine.html'

const engine = {__html: __html}

const KEY = {
  LEFT:  37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32
}

const Landing = () => {

  return (
    <div dangerouslySetInnerHTML={engine}></div>
  )
}

export default Landing