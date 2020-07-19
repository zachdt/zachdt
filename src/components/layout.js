
import Head from './head'
import Link from 'next/link'

import {ThemeProvider} from '@material-ui/core/styles'

import {
  Typography, 
  Grid, 
  Hidden,
  IconButton
} from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'


export default (props) => (
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head {...props} />

      <main>
      <div style={{backgroundColor: '#000000', padding: '1em'}}>
        {props.children}
      </div>
      </main>

      <footer style={{backgroundColor: '#000000', width: '100%', position: 'static', bottom: '0'}}>
        <Grid container direction='row' justify='flex-start' alignItems='baseline'>
          <Grid item xs={12} xl={3}>
            <Typography variant='h6'></Typography>
            <IconButton color='secondary'><GitHubIcon style={{fontSize: '1.5em', margin: '.5em'}}/></IconButton>
            <IconButton color='secondary'><LinkedInIcon style={{fontSize: '1.5em' , marginRight: '.5em'}}/></IconButton>
            <IconButton color='secondary'><TwitterIcon style={{fontSize: '1.5em'}}/></IconButton>
          </Grid>
          <Grid item>
            <Typography variant='body1' color='secondary' style={{margin: '0 2em 2em 2em'}}>copyright 2020</Typography>
          </Grid>
        </Grid>
      </footer>
  </ThemeProvider>
)