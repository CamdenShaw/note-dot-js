import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LoginWrapper from "../../components/LoginWrapper";
import "./styles.css";

class Login extends Component {
  render() {
    console.log(Meteor.userId());
    return Meteor.userId() === null ? (
      <div className="login-container">
        <LoginWrapper />
      </div>
    ) : (
      <Redirect push to="/" />
    );
  }
}

export default Login;
