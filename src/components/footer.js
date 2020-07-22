import React from 'react'

import {
  Typography, 
  Grid, 
  Hidden,
  IconButton,
  Snackbar,
  SnackbarContent
} from '@material-ui/core'
import {CopyToClipboard} from 'react-copy-to-clipboard'

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
        autoHideDuration={2000}
        onClose={handleClose}
        >
          <div style={{backgroundColor: '#D44638', color: '#EEEEEE', borderRadius: '1em', marginTop: '5em', padding: '.8em', paddingTop: '.5em'}}>
            <Typography variant='h6' color='inherit'>'zachdt@gmail.com' copied</Typography>
          </div>
        </Snackbar>
        <Grid item>
          <CopyToClipboard text='zachdt@gmail.com'>
            <a onClick={handleClick} style={{textDecoration: 'none', cursor: 'grab'}}>
              <Typography variant='h6' color='textPrimary' style={{margin: '.5em'}}>email me</Typography>
            </a>
          </CopyToClipboard>
        </Grid>
        <Grid item>
          <Typography variant='h6' color='textPrimary' style={{margin: '.5em', cursor: 'default'}}>&copy;2020</Typography>
        </Grid>
      </Grid>
    </>

  )
}

export default Footer