import React, { Component } from "react";
import "./styles.css";

import NoteCard from '../../components/NoteCards/NoteCardsItem';

class Profile extends Component {
  render() {
    this.props.thisUrl = window.location.href;
    console.log("login render", this.props.thisUrl);
    return (
      <div className="profile-container">
        <NoteCard />
      </div>
    );
  }
}

export default Profile;
