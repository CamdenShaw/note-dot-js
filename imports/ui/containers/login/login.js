import React, { Component } from "react";
import LoginWrapper from "../../components/LoginWrapper";
import './styles.css'
import Header from '../header'

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
