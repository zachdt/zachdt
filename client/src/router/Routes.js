import React from 'react'

import {withRouter, Switch, Link, Route} from 'react-router-dom'

import Landing from '../views/landing/Landing'
import Blog from '../views/blog/Blog'
import BlogPost from '../views/blog/BlogPost'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/blog' component={Blog}/>
      <Route exact path='/blog/:postID' component={BlogPost} />
    </Switch>
  )
}