import React from 'react'
import {Route, withRouter, useLocation} from 'react-router-dom'

type Props = {
  children: React.ReactNode
}


class Layout extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout