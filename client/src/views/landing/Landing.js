import React, {useState, useEffect} from 'react'

import {Typography} from '@material-ui/core'

import {makeStyles} from '@material-ui/styles'
import styles from './styles/Landing'

const useStyles = makeStyles(styles)

const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}></div>
  )
}

export default Landing