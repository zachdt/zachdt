import React from 'react'

import {
  Typography, 
  Grid, 
  Hidden,
  IconButton,
  Snackbar,
  SnackbarContent
} from '@material-ui/core'

const Footer = () => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = (event, reason) => {

    setOpen(false);
  };

  return (
    <>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Snackbar 
        open={open} 
        autoHideDuration={5000}
        onClose={handleClose}
        >
          <div style={{backgroundColor: '#D44638', color: '#EEEEEE', borderRadius: '1em', marginTop: '5em', padding: '.8em', paddingTop: '.5em'}}>
            <Typography variant='h6' color='inherit'>zachdt@gmail.com</Typography>
          </div>
        </Snackbar>
        <Grid item>
          <a onClick={handleClick} style={{textDecoration: 'none'}}>
            <Typography variant='h6' color='textPrimary' style={{margin: '.5em'}}>email me</Typography>
          </a>
        </Grid>
        <Grid item>
          <Typography variant='h6' color='textPrimary' style={{margin: '.5em'}}>&copy;2020</Typography>
        </Grid>
      </Grid>
    </>

  )
}

export default Footer