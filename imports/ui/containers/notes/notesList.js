import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import SingleNote from '../../components/Notes/SingleNote';

import { Notes } from '../../../api/notes';

class NotesListContainer extends Component {
  state = {};
  render() {
    return (
      Meteor.userId() ? <p>HOME</p> : <Redirect to="/login" />

      // <divd>
      //   {this.props.notes.map((note, index) => (
      //     <SingleNote
      //       key={index}
      //       item={note} />
      //   ))}
      // </div>
    )}
}

export default NotesListContainer;
