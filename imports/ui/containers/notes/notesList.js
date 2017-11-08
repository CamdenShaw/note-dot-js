import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class NotesListContainer extends Component {
  state = {};
  render() {
    return Meteor.userId() ? <p>HOME</p> : <Redirect to="/login" />;
  }
}

export default NotesListContainer;
