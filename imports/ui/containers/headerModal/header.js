import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";


import "./styles.css";

class ModalHeader extends Component {
  render() {
      console.log(this.props)
    return (
      <AppBar
        style={{ height: 90 }}
        iconStyleLeft={{margin: 0, width: '70%'}}
        iconElementLeft={<HeaderLeft />}
        iconElementRight={<HeaderRight 
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