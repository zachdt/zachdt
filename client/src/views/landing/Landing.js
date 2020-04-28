import React, {useState, useEffect} from 'react'

import {Typography, CircularProgress, Grid, Paper, Button, IconButton} from '@material-ui/core'

import {Redirect} from 'react-router-dom'
import CancelIcon from '@material-ui/icons/Cancel';

import {makeStyles} from '@material-ui/styles'
import styles from './styles/Landing'

const useStyles = makeStyles(styles)

const Landing = () => {
  const classes = useStyles()

  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [link, setLink] = useState()

  const [tag, setTag] = useState()
  const [isTag, setIsTag] = useState(false)

  useEffect(() => {
    const getPosts = async () => {
      console.log(process.env.REACT_APP_API_URL)
      fetch(`${process.env.REACT_APP_API_URL}api/`, {
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
        setIsTag(false)
        setTag(null)
        break
      default:
        setTag(id)
        setIsTag(true)
    }
  }

  const tagChange = (id) => {
    switch (id) {
      case 'omni-labs':
        return 'Omni Labs'
      case 'lease-otb':
        return 'Lease on the Block'
      default:
        return
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

    {/*
    
      <Grid container spacing={3} direction='row' justify='flex-start' alignItems='flex-top'>
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
            <div onClick={() => addFilter('clear')}>
              <IconButton size='small'>
                <CancelIcon color='secondary' fontSize='small'/>
              </IconButton>
            </div>
          </Grid>
        :
          null
        }
        {isTag ?
          <Grid container>
            <div className={classes.indicator}>
              <Typography variant='body1'>{tagChange(tag)}</Typography>
            </div>
          </Grid>
          :
          null
        }
      </Grid>
    
    */}
     
  
      <Grid container direction='row' alignItems='center' className={classes.blogC} spacing={1}>
        <Typography variant='h4'></Typography>
        <Grid item container direction='row' spacing={3}>
          {posts.map((obj) => {
              if (!tag || tag === obj.data.tag) {
                return (
                  <Grid key={obj.id} item xs={12} sm={6} lg={4}>
                    <Paper elevation={9} className={classes.paper} onClick={() => setLink(`/${obj.id}`)}>
                      <Typography variant='h6'>{obj.data.title}</Typography>
                      <Typography variant='body2'>{obj.data.date}</Typography>
                    </Paper>
                  </Grid>
              )}
          })}
        </Grid>
      </Grid>
    </div>
  )
  if (!posts && !isLoading) return <div>No posts.... hmmm</div>
  
}

export default Landing