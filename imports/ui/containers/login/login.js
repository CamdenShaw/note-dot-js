import React, { Component } from "react";
import LoginWrapper from "../../components/LoginWrapper";
import './styles.css'

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <LoginWrapper />
      </div>
    );
  }
}

export default Login;
