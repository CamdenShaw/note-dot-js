import React, { Component } from "react";
import LogoutButton from "../../components/Buttons/LogoutButton";
import ProfileButton from "../../components/Buttons/ProfileButton";
import NotesListButton from "../../components/Buttons/NotesListButton";
import NoteButtons from "../note-buttons";
import { url } from "../app";

class HeaderRight extends Component {
  render() {
    const profileUrl = `${url}/profile`;
    const noteUrl = `${url}/note`;
    return (
      <div className="header-right">
        {thisUrl === noteUrl ? (
          <div />
        ) : thisUrl === profileUrl ? (
          <NotesListButton height="36px" />
        ) : (
          <ProfileButton height="36px" />
        )}
        {thisUrl === noteUrl ? (
          <div className="note-buttons-container">
            <NoteButtons addNote={false} R={false} />{" "}
            <NoteButtons addNote={this.props.addNote} R={true} />
          </div>
        ) : (
          <LogoutButton height="36px" />
        )}
      </div>
    );
  }
}

export default HeaderRight;
