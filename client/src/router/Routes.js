import React from 'react'

import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

import ScrollToTop from './ScrollToTop'

import Landing from '../views/landing/Landing'
import BlogPost from '../views/blogPost/BlogPost'
import RecentPost from '../views/blogPost/RecentPost'


const Routes = () => {
  return (
    <div>
      <ScrollToTop/>
      <Switch>
        <Route exact path='/' component={RecentPost}/>
        <Route exact path='/blog' component={Landing} />
        <Route exact path='/:postID' component={BlogPost} />
      </Switch>
    </div>

  )
}

export default Routes