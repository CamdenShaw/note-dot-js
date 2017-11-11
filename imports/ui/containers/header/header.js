import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";
import HeaderLeftSNP from "./headerLeftSNP";
import { url } from "../app";

import "./styles.css";

class HeaderContainer extends Component {
  render() {
    const profileUrl = `${url}/profile`;
    const noteUrl = `${url}/note`;
    return (
      <AppBar
        style={{ height: 90 }}
        iconStyleLeft={{margin: 0, width: '70%'}}
        iconElementLeft={
          thisUrl === noteUrl ? <HeaderLeftSNP headerFormValue={this.props.headerFormValue} /> : <HeaderLeft />
        }
        iconElementRight={<HeaderRight noteTitle={this.props.noteTitle} addNote={this.props.addNote} />}
        titleStyle={{ display: "none" }}
      />
    );
  }
}

export default HeaderContainer;
