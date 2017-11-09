import React, { Component } from "react";
import "./styles.css";

import SingleNote from '../../components/Notes/SingleNote';

class Profile extends Component {
  render() {
    this.props.thisUrl = window.location.href;
    console.log("login render", this.props.thisUrl);
    return (
      <div className="profile-container">
        <SingleNote />
      </div>
    );
  }
}

export default Profile;
