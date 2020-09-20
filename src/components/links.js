import React, {useState} from 'react'

import {
  Grid,
  Typography,
  Button,
} from '@material-ui/core'

import Email from './email'

const LinkSet = [
  {
    name: 'github',
    profile: 'https://github.com/zachdt',
    color: 'black'
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
  {
    name: 'soundcloud',
    profile: 'https://soundcloud.com/zacharythielemann',
    color: '#ff7700'
  },
]

const Links = () => {
  const [textColor, setColor] = useState('white')

  return ( 
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="space-evenly"
      style={{paddingBottom: '1em'}}
    >
      {LinkSet.map(link => (
        <a key={link.name} href={link.profile} target='__blank'  
        style={{
          textDecoration: 'none', 
          color: 'white', 
          backgroundColor: link.color,
          borderRadius: '1em',
          margin: '1em .4em .4em .4em', 
          paddingLeft: '1em',
          paddingRight: '1em'}}>
          <Typography variant='h3' color='inherit'>{link.name}</Typography>
        </a>
      ))}
      <a href='mailto:zachdt@gmail.com'  
        style={{
          textDecoration: 'none', 
          color: 'black', 
          backgroundColor: 'white',
          borderRadius: '1em',
          margin: '1em .4em .4em .4em', 
          paddingLeft: '1em',
          paddingRight: '1em'}}>
          <Typography variant='h3' color='inherit'>email me</Typography>
        </a>
    </Grid>
  )
}

export default Links