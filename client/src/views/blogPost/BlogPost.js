import React, {useState, useEffect} from 'react'

import {Typography, Grid, CircularProgress} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import ReactMarkdown from 'react-markdown'

import {withRouter, useParams, Redirect} from 'react-router-dom'
import styles from './styles/BlogPost'

const useStyles = makeStyles(styles)


const BlogPost = () => {
  const parm = useParams()
  const classes = useStyles()

  const [post, setPost] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [mark, setMark] = useState()
  const [date, setDate] = useState()

  useEffect(() => {
    const getPost = async () => {
      fetch(`/api/${parm.postID}`, {
        method: "GET",
      })
      .then(res => res.json())
      .then((resp) => {
        if (!resp.title) console.log('Bad Req')
        console.log(resp)
        setPost(resp)
        setMark(resp.content)
        setDate(Date(resp.date._seconds))
        setLoading(false)
      }).catch(err => {
        console.log(err)
        setError(err)
        setLoading(false)
      })
    }

    getPost()
  },[isLoading])


  if (isLoading || !post) return (
    <div className={classes.root}>
      <CircularProgress></CircularProgress>
    </div>
  )

  if (error) return (
    <div className={classes.root}>
      {error.body}
    </div>
  )

  if (post) return (
    <div className={classes.root}>
      <Typography variant='body2'>{date}</Typography>
      <Grid item xs={12} md={12} lg={12}>
        <ReactMarkdown
          source={mark}
          className={classes.md} />
      </Grid>
    </div>
  )
  if (!post && !isLoading) return <div>nothing</div>
}

export default BlogPost