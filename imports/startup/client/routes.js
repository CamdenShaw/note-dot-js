import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "../../ui/containers/login";
import Editor from "../../ui/containers/notes/";
import PrivateRoute from "../../ui/components/PrivateRoute";
import createBrowserHistory from "history/createBrowserHistory";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const Profile = () => (
  <div>
    <h2>Profile</h2>
  </div>
);

const NotFound = () => <Redirect to="/404" />;
const p404 = () => (
  <div>
    <h2>404</h2>
  </div>
);

const Routes = (props) => (
    <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/note" component={Editor} />
        <Route path="*" component={p404} />
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes
