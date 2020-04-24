import React, {useState, useEffect} from 'react'

import {Typography, Grid, CircularProgress} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import {withRouter, useParams, Redirect} from 'react-router-dom'
import marked from 'marked'
import styles from './styles/BlogPost'

const useStyles = makeStyles(styles)


const BlogPost = () => {
  const parm = useParams()
  const classes = useStyles()

  const [post, setPost] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [link, setLink] = useState()
  const [mark, setMark] = useState()


  useEffect(() => {
    const getPost = async () => {
      fetch(`/api/${parm.postID}`, {
        method: "GET",
      })
      .then(res => res.json())
      .then((resp) => {
        if (!resp.title) console.log('weirrd')
        console.log(resp)
        setPost(resp)
        setMark(marked(resp.content))
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
      <Grid item xs={12} md={6} lg={4}>
        <Typography variant='h6'>{post.title}</Typography>
        <Typography variant='body1'>{post.date._seconds}</Typography>
      </Grid>
      <div dangerouslySetInnerHTML={{__html: mark}} />
    </div>
  )
  if (!post && !isLoading) return <div>nothing</div>
}

export default BlogPost