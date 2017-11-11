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
      headerFormValue: {
        topicValue: 'none',
        weekValue: 0,
        titleValue: ''
      }
    };
    this.addNote = this.addNote.bind(this);
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

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  addNote(event) {
    let { titleValue, weekValue, topicValue } = this.state.headerFormValue
    console.log(titleValue, weekValue, topicValue)
    event.preventDefault();
    if (this.state.editorValue) {
      Meteor.call("notes.addNote", this.state.editorValue, titleValue, weekValue, topicValue);
    }
  }

  publishNote = () => {
    let { titleValue, weekValue, topicValue } = this.state.headerFormValue
    console.log(titleValue, weekValue, topicValue)
    event.preventDefault();
    if (this.state.editorValue) {
      Meteor.call("notes.publishNote", this.state.editorValue, titleValue, weekValue, topicValue);
    }
  };

  componentWillMount() {
    this.props.thisUrl = window.location.href;
  }

  componentDidUpdate() {
    this.noteInput = this.state.editorValue;
  }

  render() {
    thisUrl = window.location.href;
    return (
      <div>
        <button onClick={this.toggleModal}>New Note</button>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <HeaderContainer headerFormValue={ this.headerFormValue } noteTitle={this.state.headerFormValue.titleValue} addNote={ this.addNote } thisUrl={thisUrl} />
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
