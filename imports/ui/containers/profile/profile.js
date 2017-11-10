import React, { Component } from "react";
import "./styles.css";

// import SingleNote from '../../components/Notes/SingleNote';

import NoteListContainer from '../notes/notesList'
class Profile extends Component {
  render() {
    this.props.thisUrl = window.location.href;
    console.log("login render", this.props.thisUrl);
    return (
      <div className="profile-container">
        {/* <SingleNote /> */}
        <NoteListContainer />
      </div>
    );
  }
}

export default Profile;
