import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Notes } from "../../../api/notes";
import NotesEditor from "../../components/Notes/NoteEditor";
import ModalHeader from "../headerModal/header";
import NoteCard from "../../components/Notes/SingleNote";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      editorValue: "",
      headerFormValue: {
        topicValue: "none",
        weekValue: 0,
        titleValue: ""
      },
      currentNoteId: "",
      allUsers: ""
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  listUsers = () => {};

  headerFormValue = (title, week = 0, topic = "none") => {
    this.setState({
      headerFormValue: {
        titleValue: title,
        weekValue: week,
        topicValue: topic
      }
    });
  };

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

  addNote = event => {
    event.preventDefault();
    let { titleValue, weekValue, topicValue } = this.state.headerFormValue;
    if (this.state.editorValue) {
      Meteor.call(
        "notes.addNote",
        this.state.editorValue,
        titleValue,
        weekValue,
        topicValue
      );
      currentNote = Notes.findOne(
        {},
        { sort: { owner: Meteor.userId(), createdOn: -1, limit: 1 } }
      );
    }
    if (currentNote) {
      this.setState({
        currentNoteId: `${currentNote._id}`
      });
    }
  };

  publishNote = () => {
    let { titleValue, weekValue, topicValue } = this.state.headerFormValue;
    event.preventDefault();
    if (this.state.editorValue) {
      Meteor.call(
        "notes.publishNote",
        this.state.editorValue,
        titleValue,
        weekValue,
        topicValue
      );
    }
  };

  componentWillMount() {
    this.props.thisUrl = window.location.href;
  }

  removeNote = () => {
    Meteor.call("notes.removeNote", `${this.state.currentNoteId}`);
  };

  componentDidUpdate() {
    this.noteInput = this.state.editorValue;
  }

  componentDidMount() {
    console.log(this.props.oldNote, this.props.currentUserId);
    if (this.props.oldNote) {
      this.setState({
        currentNoteId: this.props.oldNote._id
      });
      console.log(this.isItTrue);
      document.querySelector(
        ".DraftEditor-root"
      ).innerHTML = `<div class="DraftEditor-editorContainer ><div aria-describedby="placeholder-dfcso" class="notranslate publicDraftEditor-content" contenteditable="${this.isItTrue()}" role="textbox" spellcheck="true" style="outline: none; user-select: text; white-space: pre-wrap; word-wrap: break-word;">${this
        .props.oldNote.content}</div></div>`;
    }
  }

  isItTrue = () => {
    if (this.props.currentUserId === this.props.oldNote.owner) return true;
    else return false;
  };

  render() {
    thisUrl = window.location.href;
    let oldNoteId = null;
    if (this.props.oldNote) {
      oldNoteId = this.props.oldNote._id;
    }
    return (
      <div>
        <ModalHeader
          noteTitle={this.state.headerFormValue.titleValue}
          headerFormValue={this.headerFormValue}
          publishNote={this.publishNote}
          addNote={this.addNote}
          removeNote={this.removeNote}
        />
        <NotesEditor editorValue={this.editorValue} oldNoteId={oldNoteId} />
      </div>
    );
  }
}

Note.defaultProps = {
  notes: []
};

Note.PropTypes = {
  notes: PropTypes.array.isRequired,
  currentUserId: PropTypes.string
};

export default withTracker(() => {
  Meteor.subscribe("notes");
  Meteor.subscribe("allUsers");
  return {
    currentUserId: Meteor.userId(),
    notes: Notes.find({}).fetch(),
    allUsers: Meteor.users.find().fetch()
  };
})(Note);
