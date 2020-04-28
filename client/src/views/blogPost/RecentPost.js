import React, {useState, useEffect} from 'react'

import {Typography, Grid, CircularProgress} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import ReactMarkdown from 'react-markdown'

import {withRouter, useParams, Redirect} from 'react-router-dom'
import styles from './styles/BlogPost'

const useStyles = makeStyles(styles)


const RecentPost = () => {
  const parm = useParams()
  const classes = useStyles()

  const [post, setPost] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const getPost = async () => {
      fetch(`${process.env.REACT_APP_API_URL}api/recent`, {
        method: "GET",
      })
      .then(res => res.text())
      .then((resp) => {
        console.log(resp)
        setPost(resp)
        setLoading(false)
      }).catch(err => {
        console.log(err)
        setError(err)
        setLoading(false)
      })
    }

    getPost()
  },[])


  if (isLoading) return (
    <div className={classes.root}>
      <CircularProgress color='secondary'></CircularProgress>
    </div>
  )
  if (post && !isLoading) return <Redirect push to={`/${post}`}/>
  if (!post && !isLoading) return <div className={classes.root}><Typography>No posts... hmmm this isnt normal</Typography></div>
}

export default RecentPost