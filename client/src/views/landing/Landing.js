import React, {useState, useEffect} from 'react'

import {Typography, CircularProgress, Grid, Paper, Button, IconButton} from '@material-ui/core'

import {Redirect} from 'react-router-dom'

import {makeStyles} from '@material-ui/styles'
import styles from './styles/Landing'

const useStyles = makeStyles(styles)

const Landing = () => {
  const classes = useStyles()

  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [link, setLink] = useState()

  const [tags, setTags] = useState([])
  const [isTag, setIsTag] = useState(false)


  useEffect(() => {
    const getPosts = async () => {
      fetch('/api/', {
        method: "GET",
      })
      .then(res => res.json())
      .then((post) => {
        setLoading(false)
        if (!post.body) console.log('weirrd')
        console.log(post)
        setPosts(post)
      }).catch(err => {
        setLoading(false)
        console.log(err)
        setError(err)
      })
    }

    getPosts()
  },[isLoading])

  const addFilter = (id) => {
    switch (id) {
      case 'clear':
        setTags([])
        setIsTag(false)
      default:
        let arr = tags
        arr = arr.push(id)
        setTags(arr)
        setIsTag(true)
    }
  }

  if (isLoading) return (
    <div className={classes.root}>
      <div className={classes.loadingC}>
        <CircularProgress color='error'/>
      </div>
    </div>
  )
  if (link) return (
    <div className={classes.root}>
      <Redirect to={link}/>
    </div>
  )

  if (error) return (
    <div className={classes.root}>
      {error}
    </div>
  )

  if (posts) return (
    <div className={classes.root}>
      <Grid container spacing={3} direction='row' justify='flex-start' alignItems='center'>
        <Grid item  className={classes.active}>
          <div className={classes.filter} onClick={() => addFilter('lease-otb')}>
            <img border='' className={classes.img} src='https://storage.googleapis.com/leaseotb-images/LOTB-Logo.png'/>
          </div>
        </Grid>
        <Grid item className={classes.inactive}>
          <div className={classes.filter} onClick={() => addFilter('omni-labs')}>
              <img border='' className={classes.img} src='https://omniinc.com/icons/icon-72x72.png?v=b11026a9a33e92d6df22397e0cc18cce'/>
          </div>
        </Grid>
        {isTag ? 
          <Grid item className={classes.clear}>
            <div className={classes.filter} onClick={() => addFilter('clear')}>
              <IconButton>
                What
              </IconButton>
            </div>
          </Grid>
        :
          null
        }
      </Grid>
      <Grid container direction='row' alignItems='center' className={classes.blogC} spacing={1}>
        <Grid item container direction='row' spacing={4}>
          {posts.map((obj) => {
            for (let x = 0; x <= tags.length; x++){
              if (tags[x] === obj.data.tag) {
                return (
                  <Grid key={obj.id} item xs={12} sm={6} md={6}>
                    <Paper className={classes.paper} onClick={() => setLink(`/${obj.id}`)}>
                      <Typography variant='h6'>{obj.data.title}</Typography>
                      <Typography variant='body2'>{obj.data.date}</Typography>
                    </Paper>
                  </Grid>
              )}
            }
          
          })}
        </Grid>
      </Grid>
    </div>
  )
  if (!posts && !isLoading) return <div>No posts.... hmmm</div>
  
}

export default Landing