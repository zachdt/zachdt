import Head from 'next/head'

import {Grid, Typography} from '@material-ui/core'
import Layout from '../src/components/layout'
import Header from '../src/components/header'
import CV from '../src/components/cv'
import Activity from '../src/components/activity'
import '../src/sentry'


export default () => {
  return (
    <Layout>
      <Header/>
      <Grid container direction='row' style={{padding: '2em'}}>
        <Grid item xs={12} md={7}>
          <CV />
        </Grid>
        <Grid item xs={12} md={5}>
          <Activity />
        </Grid>
      </Grid>
    </Layout>
  )
}
