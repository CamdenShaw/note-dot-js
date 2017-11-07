import React, { Component } from "react";
import LogoutButton from "../../components/Buttons/LogoutButton";
import ProfileButton from "../../components/Buttons/ProfileButton";
import NotesListButton from "../../components/Buttons/NotesListButton";
import NoteButtons from "../note-buttons";
import { url } from "../app";
import { thisUrl } from "./header";

class HeaderRight extends Component {
  render() {
    const profileUrl = `${url}/profile`;
    const noteUrl = `${url}/note`;
    return (
      <div className="header-right">
        {thisUrl === noteUrl ? (
          <div />
        ) : thisUrl === profileUrl ? (
          <NotesListButton />
        ) : (
          <ProfileButton />
        )}
        {thisUrl === noteUrl ? <NoteButtons /> : <LogoutButton />}
      </div>
    );
  }
}

export default HeaderRight;
