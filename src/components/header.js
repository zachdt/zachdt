import Link from 'next/link'

import {
  Typography, 
  Grid, 
  Hidden,
  IconButton
} from '@material-ui/core'


export default () => {

  return (
    <Grid container style={{
      padding: '2em'
      }} direction='row' justify="flex-start" alignItems='center'>
      <Grid item xs={7} md={9}>
        <Hidden smDown>        
          <Link href={'/'} style={{cursor: 'grab'}}>
            <Typography variant='h1' color='primary'>zachary thielemann</Typography>
          </Link>
        </Hidden>
        <Hidden mdUp>
          <Link href={'/'} style={{cursor: 'grab'}}>   
            <Typography variant='h1' color='primary'>zachdt</Typography>
          </Link>
        </Hidden>
      </Grid>
    </Grid>
  )
}
