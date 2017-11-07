import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

const LogoutButton = props => {
  return (
    <Link to="/login">
      <RaisedButton
        onClick={() => {
          Meteor.logout();
        }}
      >
        Logout
      </RaisedButton>
    </Link>
  );
};

export default LogoutButton;
