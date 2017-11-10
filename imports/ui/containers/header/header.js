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
        iconElementLeft={
          thisUrl === noteUrl ? <HeaderLeftSNP /> : <HeaderLeft />
        }
        iconElementRight={<HeaderRight addNote={this.props.addNote} />}
        titleStyle={{ display: "none" }}
      />
    );
  }
}

export default HeaderContainer;
