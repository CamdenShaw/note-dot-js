import React, { Component } from "react";
import "./styles.css";

class Profile extends Component {
  render() {
    this.props.thisUrl = window.location.href;
    console.log("login render", this.props.thisUrl);
    return (
      <div className="profile-container">
        <p>Profile</p>
      </div>
    );
  }
}

export default Profile;
