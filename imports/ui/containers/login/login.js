import React, { Component } from "react";
import LoginWrapper from "../../components/LoginWrapper";
import "./styles.css";

class Login extends Component {
  render() {
    this.props.thisUrl = window.location.href;
    return (
      <div className="login-container">
        <LoginWrapper />
      </div>
    );
  }
}

export default Login;
