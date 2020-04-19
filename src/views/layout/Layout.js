import React from 'react'

import {Typography} from '@material-ui/core'

import Navigation from './Navigation'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div>
        {this.props.children}
        </div>
      </div>  
    )
  }

}

export default Layout