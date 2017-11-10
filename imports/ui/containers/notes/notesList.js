import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Redirect } from "react-router-dom";

import SingleNote from '../../components/Notes/SingleNote';

import { Notes } from '../../../api/notes';

class NotesListContainer extends Component {
  state = {};
  render() {
    console.log(this.props.notes)
    return (
      // Meteor.userId() ? 
      <div className="notesContainer">
      {this.props.notes.map((note, index) => (
        <SingleNote
          key={index}
          item={note} />
      ))}
    </div> 
    
    // : <Redirect to="/login" />

      // <div className="notesContainer">
      //   {this.props.notes.map((note, index) => (
      //     <SingleNote
      //       key={index}
      //       item={note} />
      //   ))}
      // </div>
    )}
}

// export default NotesListContainer;

export default withTracker(() => {
  Meteor.subscribe('notes')

  return {
    currentUserId: Meteor.userId(),
    notes: Notes.find({}).fetch()
  }
})(NotesListContainer);
