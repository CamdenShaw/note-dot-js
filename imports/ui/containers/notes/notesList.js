import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect } from "react-router-dom";
import Note from "./notes";
import SingleNote from "../../components/Notes/SingleNote";
import { Notes } from "../../../api/notes";

import "./style.css";

class NotesListContainer extends Component {
  state = {};
  render() {
    return (
      // Meteor.userId() ?
      <div className="cards-container">
        {/* <Note /> */}
        {window.location.href === "http://localhost:3000/profile" ? (
          this.props.notes.map((note, index) => (
            <SingleNote className="card" key={index} item={note} />
          ))
        ) : (
          this.props.publishedNotes.map((note, index) => (
            <SingleNote className="card" key={index} item={note} />
          ))
        )}
      </div>

      // : <Redirect to="/login" />

      // <div className="notesContainer">
      //   {this.props.notes.map((note, index) => (
      //     <SingleNote
      //       key={index}
      //       item={note} />
      //   ))}
      // </div>
    );
  }
}

// export default NotesListContainer;

export default withTracker(() => {
  Meteor.subscribe("notes");

  return {
    currentUserId: Meteor.userId(),
    notes: Notes.find({ owner: Meteor.userId() }, {sort: {createdOn: -1}}).fetch(),
    publishedNotes: Notes.find({ publish: true }, {sort:{createdOn: -1}}).fetch()
  };
})(NotesListContainer);
