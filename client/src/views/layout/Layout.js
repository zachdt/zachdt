import React from 'react'

import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import Navigation from './Navigation'
import Footer from './Footer'
import styles from './styles/Layout'

const useStyles = makeStyles(styles)

class Layout extends React.Component {
  render() {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <Navigation />
        <div className={classes.page}>
          {this.props.children}
        </div>
        <Footer />
      </div>  
    )
  }

}

export default Layout