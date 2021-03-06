import React, { Component } from "react";
import DeleteButton from "../../components/Buttons/DeleteButton";
import SaveButton from "../../components/Buttons/SaveButton";
import PublishButton from "../../components/Buttons/PublishButton";
import LogoutButton from "../../components/Buttons/LogoutButton";
import ProfileButton from "../../components/Buttons/ProfileButton";
import NotesListButton from "../../components/Buttons/NotesListButton";

import "./styles.css";

const NoteButtons = props => {
  return (
    <div className="buttons-container">
      {props.R === true ? (
        <PublishButton noteTitle={props.noteTitle} publishNote={props.publishNote} />
      ) : (
        <NotesListButton height="25px" />
      )}
      {props.R === true ? (
        <SaveButton noteTitle={props.noteTitle} addNote={props.addNote} />
      ) : (
        <ProfileButton height="25px" />
      )}
      {props.R === true ? (
        <DeleteButton removeNote={props.removeNote} />
      ) : (
        <LogoutButton height="25px" />
      )}
    </div>
  );
};

export default NoteButtons;
