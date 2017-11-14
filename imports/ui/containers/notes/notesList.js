import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect } from "react-router-dom";
import Note from "./notes";
import SingleNote from "../../components/Notes/SingleNote";
import { Notes } from "../../../api/notes";

import "./style.css";

class NotesListContainer extends Component {
  constructor(props) {
    super(props)
  }

  // filterNotes = () => {
  //   let {filters, filterType, upVotes} = this.props.filters
  //   if(filterType === "student"){
  //     emails = []
  //     this.props.users.forEach(user => (
  //       emails.push(user.emails[0].address)
  //     ))
  //     this.notesList = this.props.publishedNotes.filter((item, key) => {
  //       return item.owner === this.props.users[key]._id
  //     })
  //     this.profileList = this.props.notes.filter((item, key) => {
  //       return item.owner === this.props.users[key]._id
  //     })
  //   } else if(filterType === "topic") {
  //     this.notesList = this.props.publishedNotes.filter((item, key) => {
  //       return item.topic === filters
  //     })
  //     this.profileList = this.props.notes.filter((item, key) => {
  //       return item.topic === filters
  //     })
  //   } else if(filterType === "week") {
  //     this.notesList = this.props.publishedNotes.filter((item, key) => {
  //       return item.week === filters
  //     })
  //     this.profileList = this.props.notes.filter((item, key) => {
  //       return item.week === filters
  //     })
  //   } else {
  //     this.profileList = this.props.notes
  //     this.notesList = this.props.publishedNotes
  //   }
  // }

  componentDidUpdate() {
    // this.filterNotes()
  }

  componentWillMount() {
    let profileList = this.props.notes,
        notesList = this.props.publishedNotes
  }

  componentDidMount() {
    profileList = this.props.notes
    notesList = this.props.publishedNotes
  }

  render() {
    return (
      // Meteor.userId() ?
      <div className="cards-container">
        {/* <Note /> */}
        {window.location.href === "http://localhost:3000/profile" ? (
          this.props.notes.map((note, index) => (
              <SingleNote filters={this.props.filters} className="card" key={index} item={note} />
          ))
        ) : (
          this.props.publishedNotes.map((note, index) => (
              <SingleNote filters={this.props.filters} className="card" key={index} item={note} />
          ))
        )}
      </div>
    );
  }
}

// export default NotesListContainer;

export default withTracker(() => {
  Meteor.subscribe("notes");
  Meteor.subscribe("allUsers")

  return {
    users: Meteor.users.find().fetch(),
    currentUserId: Meteor.userId(),
    notes: Notes.find({ owner: Meteor.userId() }, {sort: {createdOn: -1}}).fetch(),
    publishedNotes: Notes.find({ publish: true }, {sort:{createdOn: -1}}).fetch()
  };
})(NotesListContainer);
