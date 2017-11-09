import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

const LogoutButton = (height, props) => {
  return (
    <Link to="/login">
      <RaisedButton className="logout" style={{height: height.height}} buttonStyle={{lineHeight: height.height}}
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