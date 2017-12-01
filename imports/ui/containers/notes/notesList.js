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
    this.state = {
      sortedNotes: this.props.notes,
      sortedPublishedNotes: this.props.publishedNotes
    }
  }
  
  checkBoolean() {
    if(this.props.filters.upVotes === false){
      this.setState({sortedNotes: this.props.upVotesNotes})
      this.setState({sortedPublishedNotes: this.props.upVotesPublishedNotes})
    } else if(this.state.sortedNotes !== this.props.notes ) {
      this.setState({sortedNotes: this.props.notes})
      this.setState({sortedPublishedNotes: this.props.publishedNotes})
    }
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps)
    return this.props.filters.upVotes !== nextProps.filters.upVotes
  }

  componentDidUpdate() {
    this.checkBoolean()
  }

  componentDidMount() {
    console.log('component did mount')
    this.setState(this.state)
    this.checkBoolean()
  }

  render() {
    return (
      // Meteor.userId() ?
      <div className="cards-container">
        {/* <Note /> */}
        {window.location.href === "http://localhost:3000/profile" ? (
          this.state.sortedNotes.map((note, index) => (
              <SingleNote filters={this.props.filters} className="card" key={index} item={note} />
          ))
        ) : (
          this.state.sortedPublishedNotes.map((note, index) => {
            return <SingleNote filters={this.props.filters} className="card" key={index} item={note} />
          })
        ) }
      </div>
    );
  }
}

// export default NotesListContainer;

export default withTracker(() => {
  Meteor.subscribe("notes");
  Meteor.subscribe("allUsers")

  return {
    notes: Notes.find({ owner: Meteor.userId() }, {sort: {createdOn: -1}}).fetch(),
    publishedNotes: Notes.find({ publish: true }, {sort:{createdOn: -1}}).fetch(),
    upVotesNotes: Notes.find({owner: Meteor.userId()},{sort: {upVote: -1}}).fetch(),
    upVotesPublishedNotes: Notes.find({publish: true}, {sort: {upVote: -1}}).fetch()
  };
})(NotesListContainer);
