import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import Modal from "../../components/NotesModal";
import { Notes } from "../../../api/notes";
import NotesEditor from "../../components/Notes/NoteEditor";
import ModalHeader from "../../components/NotesModal/ModalHeader";
class Note extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  componentWillMount() {
    this.props.thisUrl = window.location.href;
    console.log("note render", this.props.thisUrl);
  }

  addNote(event) {
    event.preventDefault();

    if (this.noteInput.value) {
      Meteor.call("notes.addNote", this.noteInput.value);

      this.noteInput.value = "";
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>New Note</button>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <NotesEditor />
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
