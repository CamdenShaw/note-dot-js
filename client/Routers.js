import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Layout from '../imports/ui/containers/app'

import PrivateRouters from './PrivateRouters'

const Home = () => <div><h2>Home</h2></div>
const SignIn = () => <div><h2>Sign in / Sign up</h2></div>
const Profile = () => <div><h2>Profile</h2></div>
const Note = () => <div><h2>Single Note</h2></div>
const NotFound = () => <Redirect to="/404" />
const p404 = () => <div><h2>404</h2></div>

class Routers extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={SignIn} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Note" component={Note} />
            <Route path="/404" component={p404} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default Routers