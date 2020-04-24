import React, {useState, useEffect} from 'react'

import {Typography, CircularProgress, Grid, Paper} from '@material-ui/core'

import {Redirect} from 'react-router-dom'

import {makeStyles} from '@material-ui/styles'
import styles from './styles/Landing'

const useStyles = makeStyles(styles)

const About = () => {
  const classes = useStyles()
  const [link, setLink] = useState()

  if (link) return <Redirect to={link}></Redirect>
  return (
    <div className={classes.about}>
      <Grid container>
        <Grid container item xs={12} md={6} spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography>
              Work & Projects
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} className={classes.active}>
            <Paper className={classes.paper} onClick={() => setLink(`/lease-otb`)}>
              <Grid container>
                <Grid item xs={3}>
                  <img border='' className={classes.img} src='https://storage.googleapis.com/leaseotb-images/LOTB-Logo.png'/>
                </Grid>
                <Grid item>
                  <Typography variant='body2'>Lease on the Block</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6} className={classes.inactive}>
            <Paper className={classes.paper} onClick={() => setLink(`/omni-labs`)}>
              <Grid container>
                <Grid item xs={3}>
                  <img border='' className={classes.img} src='https://omniinc.com/icons/icon-72x72.png?v=b11026a9a33e92d6df22397e0cc18cce'/>
                </Grid>
                <Grid item>
                  <Typography variant='body2'>Omni Labs</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      
        <Grid container item xs={12} md={6}>
          <Grid item xs={12} className=''>
            <Typography className={classes.edu}>
              Education
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}


const Landing = () => {
  const classes = useStyles()

  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [link, setLink] = useState()

  useEffect(() => {
    const getPosts = async () => {
      fetch('/api/', {
        method: "GET",
      })
      .then(res => res.json())
      .then((post) => {
        if (!post.body) console.log('weirrd')
        console.log(post)
        setPosts(post)
        setLoading(false)
      }).catch(err => {
        console.log(err)
        setError(err)
        setLoading(false)
      })
    }

    getPosts()
  },[isLoading])


  if (isLoading || link) return (
    <div className={classes.root}>
      <About/>
      <div className={classes.loadingC}>
      <CircularProgress></CircularProgress>
      <Redirect to={link}/>
      </div>
    </div>
  )

  if (error) return (
    <div className={classes.root}>
      {error}
    </div>
  )

  if (posts) return (
    <div className={classes.root}>
      <About/>
      <Grid container direction='row' alignItems='center' className={classes.blogC} spacing={1}>
        <Grid item xs={12} className={classes.recent}>
          <Typography variant='h6'>Recent Posts</Typography>
        </Grid>
        {posts.map((obj) => {
          return (
            <div key={obj.id}>
              <Grid item xs={12} md={6} lg={4}>
                <Paper className={classes.paper} onClick={() => setLink(`/${obj.id}`)}>
                  <Typography variant='h6'>{obj.data.title}</Typography>
                  <Typography variant='body1'>{obj.data.date._seconds}</Typography>
                </Paper>
              </Grid>
            </div>
          )
        })}
      </Grid>
    </div>
  )
  if (!posts && !isLoading) return <div>nothing</div>
  
}

export default Landing