import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Notes } from "../../../api/notes";
import NotesEditor from "../../components/Notes/NoteEditor";
import ModalHeader from '../headerModal/header';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      editorValue: "",
      headerFormValue: {
        topicValue: 'none',
        weekValue: 0,
        titleValue: ''
      },
      currentNoteId: ""
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  headerFormValue = ( title, week = 0, topic = 'none' ) => {

    this.setState({
      headerFormValue: {
        titleValue: title,
        weekValue: week,
        topicValue: topic
      }
    })
  }

  editorValue = text => {
    const noteValue = text;
    if (noteValue.length > 1 && noteValue !== this.state.editorValue) {
      this.setState({
        editorValue: noteValue
      });
    }
  };

  // toggleModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // };

  addNote = event => {
    event.preventDefault();
    let { titleValue, weekValue, topicValue } = this.state.headerFormValue
    if (this.state.editorValue) {
      //   console.log(this.state.editorValue);
      Meteor.call("notes.addNote", this.state.editorValue, titleValue, weekValue, topicValue);
      currentNote = Notes.findOne(
        {},
        { sort: { owner: Meteor.userId(), createdOn: -1, limit: 1 } }
      );
    }
    if (currentNote) {
      this.setState({
        currentNoteId: `${currentNote._id}`
      });
      console.log("currentNote variable", currentNote._id);
    }
    console.log(
      "currentNoteId from state",
      this.state.currentNoteId,
      this.state
    );
  };

  publishNote = () => {
    let { titleValue, weekValue, topicValue } = this.state.headerFormValue
    event.preventDefault();
    if (this.state.editorValue) {
      Meteor.call("notes.publishNote", this.state.editorValue, titleValue, weekValue, topicValue);
    }
  };

  componentWillMount() {
    this.props.thisUrl = window.location.href;
  }
  
  removeNote = () => {
    Meteor.call("notes.removeNote", `${this.state.currentNoteId}`);
  };

  // componentWillMount() {
  //   this.props.thisUrl = window.location.href;
  //   // console.log("note render", this.props.thisUrl);
  //   // console.log(this);
  // }

  // componentDidMount() {
  //   // console.log(this);
  // }

  componentDidUpdate() {
    this.noteInput = this.state.editorValue;
  }

  render() {
    thisUrl = window.location.href;
    return (
      <div>
        <button onClick={this.toggleModal}>New Note</button>
          <ModalHeader
            noteTitle={this.state.headerFormValue.titleValue}
            headerFormValue={ this.headerFormValue }
            publishNote={this.publishNote}
            addNote={this.addNote}
            removeNote={this.removeNote} />
          <NotesEditor editorValue={this.editorValue} />
      </div>
    );
  }
}

// export default Note

Note.defaultProps = {
  notes: []
};

Note.PropTypes = {
  notes: PropTypes.array.isRequired,
  currentUserId: PropTypes.string
};

export default withTracker(() => {
  Meteor.subscribe("notes");
  return {
    currentUserId: Meteor.userId(),
    notes: Notes.find({}).fetch()
  };
})(Note);
