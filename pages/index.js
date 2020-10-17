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
  const [op, setOp] = useState(10)
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
  /*
  if (load < 100 ) return (
    <Layout isLoad>
      <div style={{textAlign: 'center', paddingTop: '4em', opacity: `${op}%`}}>
        <LinearProgress color='secondary' size={80} thickness={40} value={load} />
      </div>
    </Layout>
  )*/
  return (
    <Zoom in={false} timeout={ 0 }>
        <Layout>
          <Grid container direction='row' justify="space-around" alignItems='flex-start' style={{padding: '2.5em'}}>
            <Grid item xs={12} md={6} lg={4}
            >
              <Typography variant='h4' style={{}}>Working on</Typography>
              <br/>
              <Typography variant='body1'><strong>primitive.finance</strong></Typography>
              <br/>
              <Typography variant='body1'><strong>leaseontheblock.care</strong></Typography>
              <br/>
              <Typography variant='body1'><strong>frontier.xyz</strong></Typography>
            <br/>
          </Grid>
            <Grid item xs={12} md={5} lg={7}>
              <Typography variant='h4' style={{}}>What I do</Typography>
              <br/>
              <Typography variant='body1'>Web development, smart contract engineering, product management, audio engineering, music production, DJing, and skating. </Typography>
              <br/>
              <Typography variant='body1'><strong>Always looking to assist novel projects!</strong></Typography>
            </Grid>
          </Grid>
        </Layout>
    </Zoom>
    
  )
}