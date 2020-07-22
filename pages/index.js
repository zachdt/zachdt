import Head from 'next/head'

import {Grid, Typography} from '@material-ui/core'
import Layout from '../src/components/layout'
import Links from '../src/components/links'

import '../src/sentry'
import { useEffect } from 'react'


export default () => {
  useEffect(() => {
    console.log('No Easter Eggs Yet...')
  })
  return (
    <Layout>
      <Grid container direction='column' justify="space-evenly" alignItems='center'>
        <Grid item xs={12} md={8}>
          <Links />
        </Grid>
      </Grid>
    </Layout>
  )
}
