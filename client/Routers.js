import React, {Component} from 'react';
import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Layout from '../imports/ui/containers/app'
import PrivateRouters from './PrivateRouters'
import createBrowserHistory from 'history/createBrowserHistory'

const Home = () => <div><h2>Home</h2></div>
const SignIn = () => <div><h2>Sign in / Sign up</h2></div>
const Profile = () => <div><h2>Profile</h2></div>
const Note = () => <div><h2>Single Note</h2></div>
const NotFound = () => <Redirect to="/404" />
const p404 = () => <div><h2>404</h2></div>

const browserHistory = createBrowserHistory()

export const Routers = () => (
  <Router history={ browserHistory }>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/note" component={Note} />
        <Route path="/404" component={p404} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
)