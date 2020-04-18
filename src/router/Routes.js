import React from 'react'

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

import Landing from '../views/landing/Landing'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Landing}/>
      </Switch>
    </Router>
  )
}

export default Routes