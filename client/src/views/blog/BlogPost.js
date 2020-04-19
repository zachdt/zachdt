import React from 'react'

import {Typography, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import {withRouter, useParams} from 'react-router-dom'

import styles from './styles/'

const useStyles = makeStyles(styles)


const BlogPost = () => {
  const postID = useParams()
  const classes = useStyles()

  return (
    <div className={classes.root}>

    </div>
  )
}