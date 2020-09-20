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

const Email = () => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = (event, reason) => {

    setOpen(false);
  };

  return (
    <>
      <Snackbar 
      open={open} 
      autoHideDuration={2000}
      onClose={handleClose}
      >
        <CopyToClipboard text='zachdt@gmail.com'>
          <a onClick={handleClick} style={{textDecoration: 'none', cursor: 'grab'}}>
            <Typography variant='h3' style={{margin: '.3em'}}>email me</Typography>
          </a>
        </CopyToClipboard>
        <div style={{backgroundColor: '#D44638', color: '#EEEEEE', borderRadius: '1em', padding: '.8em'}}>
          <Typography variant='h3' color='inherit'>copied zachd@gmail.com</Typography>
        </div>
      </Snackbar>
    </>
  )
}

export default Email