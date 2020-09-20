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
          <Grid container direction='row' justify="flex-start" alignItems='flex-start' style={{padding: '1.5em'}}>
            <Grid item xs={12} md={6} lg={4} container direction='row' justify='flex-start' alignItems='center'
              style={{margin: '0 1em 1em 1em', padding: '.5em', borderColor: 'white', borderWidth: '.3em', borderStyle: 'groove', borderRadius: '1em 1em'}}
            >
              <Typography variant='h4' style={{marginLeft: '.5em'}}>Working on</Typography>
              <ul>
                <li>
                  <Typography variant='body1'>cofounder and tech lead - Lease on the Block (Affordable Housing Tech)</Typography>
                </li>
                <li>
                <Typography variant='body1'>founder - Tir Research (Crypto Research)</Typography>
                </li>
              </ul>
          </Grid>
            <Grid item xs={12}>
              <br/>
              <Typography variant='body1'>I perform several functions, including web development, smart contract engineering, product management, audio engineering, music production, DJing, and skating. </Typography>
            </Grid>
            <Grid item xs={12}>
              <br/>
              <Typography variant='body1'><strong>Always looking to assist projects of any scope or topic in any way I can.</strong></Typography>
            </Grid>
          </Grid>
        </Layout>
    </Zoom>
    
  )
}