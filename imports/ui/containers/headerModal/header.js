import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";


import "./styles.css";

class ModalHeader extends Component {
  render() {
    oldNote = null
    if(this.props.oldNote) oldNote = this.props.oldNote;
    return (
      <AppBar
        style={{ height: 90 }}
        iconStyleLeft={{margin: 0, width: '70%'}}
        iconElementLeft={<HeaderLeft headerFormValue={this.props.headerFormValue} oldNote={oldNote} />}
        iconElementRight={<HeaderRight 
            noteTitle={this.props.noteTitle}
            publishNote={this.props.publishNote}
            addNote={this.props.addNote}
            removeNote={this.props.removeNote}
        />}
        titleStyle={{ display: "none" }}
      />
    );
  }
}

export default ModalHeader;