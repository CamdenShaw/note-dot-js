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
      editorValue: ""
    };
  }

  editorValue = text => {
    const noteValue = text;
    // this.setState({
    //   editorValue: ""
    // });
    console.log(text);
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  addNote(event) {
    event.preventDefault();

    if (this.noteInput.value) {
      Meteor.call("notes.addNote", this.noteInput.value);

      this.noteInput.value = "";
      console.log(this.noteInput.value);
    }
  }

  componentWillMount() {
    this.props.thisUrl = window.location.href;
    console.log("note render", this.props.thisUrl);
    console.log(this);
  }

  componentDidMoutn() {
    console.log(this);
  }

  componentDidUpdate() {
    this.noteInput.value = this.noteInput.refs.editor.innerText;
    console.log(this);
  }

  render() {
    thisUrl = window.location.href;
    return (
      <div>
        <button onClick={this.toggleModal}>New Note</button>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <HeaderContainer thisUrl={thisUrl} />
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
