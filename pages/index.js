import Head from 'next/head'
import {Grid, Typography, CircularProgress, LinearProgress, Zoom} from '@material-ui/core'
import Layout from '../src/components/layout'
import Links from '../src/components/links'
import {ThemeProvider} from '@material-ui/core/styles'

import '../src/sentry'
import { useEffect, useState } from 'react'


export default () => {
  
  const [load, setLoad] = useState(0)
  const [fade, setFade] = useState(false)
  const [op, setOp] = useState(100)
  useEffect(() => {
    console.log('No Easter Eggs Yet...')

    const tick = () => {
      setLoad(old => (old >= 100 ? 100 : old + 1))
      if (load === 90) setFade(true)
      setOp(old => old - 1)
    }
    
    const timer = setInterval(tick, 10)

    return () => {
      clearInterval(timer)
    }
  }, [fade])

  if (load < 100 ) return (
    <Layout isLoad>
      <div style={{textAlign: 'center', paddingTop: '4em', opacity: `${op}%`}}>
        <LinearProgress color='secondary' size={80} thickness={40} value={load} />
      </div>
    </Layout>
  )
  return (
    <Zoom in={true} timeout={ 1500 }>
      <div>
        <Layout>
          <Grid container direction='column' justify="space-evenly" alignItems='center'>
            <Grid item xs={12} md={8}>
              <Links />
            </Grid>
          </Grid>
        </Layout>
      </div>
    </Zoom>
    
  )
}