import React, { Component } from "react";
import "./styles.css";

import Note from '../notes/notes'
import NoteListContainer from '../notes/notesList'
class Profile extends Component {
  render() {
    this.props.thisUrl = window.location.href;
    return (
      <div className="profile-container">
        {/* <Note /> */}
        <NoteListContainer />
      </div>
    );
  }
}

export default Profile;
