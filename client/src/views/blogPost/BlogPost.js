import React, {useState, useEffect} from 'react'

import {Typography, Grid, CircularProgress, IconButton} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import ReactMarkdown from 'react-markdown'

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


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
      fetch(`${process.env.REACT_APP_API_URL}api/${parm.postID}`, {
        method: "GET",
      })
      .then(res => res.json())
      .then((resp) => {
        if (!resp.title) console.log('Bad Req')
        console.log(resp)
        setLoading(false)

        setPost(resp)
        setMark(resp.content)

        setDate(resp.date)
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
      <CircularProgress color='error'></CircularProgress>
    </div>
  )

  if (post) return (
    <div className={classes.root}>
      <Grid container direction='row' alignItems='center' justify='flex-start'>
        <Typography variant='body2'>{date}</Typography>
        <IconButton size='small' disabled>
          <NavigateNextIcon/>
        </IconButton>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <ReactMarkdown
          source={mark}
          className={classes.md} />
      </Grid>
    </div>
  )
  if (!post && !isLoading) return <div className={classes.root}>nothing</div>
}

export default BlogPost