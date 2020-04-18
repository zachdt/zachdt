import React, {useState, useEffect} from 'react'

import {makeStyles} from '@material-ui/styles'
import styles from './styles'


const useStyles = makeStyles(styles)

const Engine = ({height, width}) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <span className={classes.character} />
    </div>
  )
}


export default Engine