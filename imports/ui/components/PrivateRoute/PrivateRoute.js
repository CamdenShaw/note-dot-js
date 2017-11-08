import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

const PrivateRoute = ({ component: Component, currentUserId, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      currentUserId ? 
        <Component {...props} />
        : <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )}
  />
);

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  };
})(PrivateRoute);

// export default PrivateRoute