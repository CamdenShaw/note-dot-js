import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import Modal from "../../components/NotesModal";
import { Notes } from "../../../api/notes";
import NotesEditor from "../../components/Notes/NoteEditor";
import ModalHeader from "../../components/NotesModal/ModalHeader";
import HeaderContainer from "../header/header";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      editorValue: "",
      currentNoteId: ""
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  editorValue = text => {
    const noteValue = text;
    if (noteValue.length > 1 && noteValue !== this.state.editorValue) {
      //   console.log(noteValue);
      this.setState({
        editorValue: noteValue
      });
    }
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  addNote = event => {
    event.preventDefault();
    if (this.state.editorValue) {
      //   console.log(this.state.editorValue);
      Meteor.call("notes.addNote", this.state.editorValue);
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
    if (this.state.editorValue) {
      //   console.log(this.state.editorValue);
      Meteor.call("notes.publishNote", this.state.editorValue);
    }
  };

  removeNote = () => {
    Meteor.call("notes.removeNote", `${this.state.currentNoteId}`);
  };

  componentWillMount() {
    this.props.thisUrl = window.location.href;
    // console.log("note render", this.props.thisUrl);
    // console.log(this);
  }

  componentDidMoutn() {
    // console.log(this);
  }

  componentDidUpdate() {
    this.noteInput = this.state.editorValue;
    // console.log(this);
  }

  render() {
    thisUrl = window.location.href;
    return (
      <div>
        <button onClick={this.toggleModal}>New Note</button>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <HeaderContainer
            publishNote={this.publishNote}
            addNote={this.addNote}
            removeNote={this.removeNote}
            thisUrl={thisUrl}
          />
          <NotesEditor editorValue={this.editorValue} />
        </Modal>
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
