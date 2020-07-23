import React, {useState} from 'react'

import {
  Grid,
  Typography,
  Button,
} from '@material-ui/core'

const LinkSet = [
  {
    name: 'github',
    profile: 'https://github.com/zachdt',
    color: '#333'
  },
  {
    name: 'twitter',
    profile: 'https://twitter.com/@_zachdt',
    color: '#00acee'
  },
  {
    name: 'linkedin',
    profile: 'https://www.linkedin.com/in/zacharydavisthielemann/',
    color: '#2867B2'
  },
  {
    name: 'instagram',
    profile: 'https://instagram.com/_zachdt',
    color: '#E1306C'
  },
]

const Links = () => {
    
  const [textColor, setColor] = useState('white')

  const handleHover = () => {
    color
  }
  return ( 
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      {LinkSet.map(link => (
        <a key={link.name} href={link.profile} target='__blank'  
        style={{
          textDecoration: 'none', 
          color: link.color, 
          backgroundColor: 'white', 
          borderRadius: '1em', 
          margin: '.5em', 
          paddingLeft: '1em',
          paddingRight: '1em'}}>
          <Typography variant='h3' color='inherit'>{link.name}</Typography>
        </a>
      ))}
    </Grid>
  )
}

export default Links