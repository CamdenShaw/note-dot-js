import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";

import "./styles.css";

const thisUrl = window.location.href;

class HeaderContainer extends Component {
  render() {
    return (
      <AppBar style={{ height: 90 }}>
        {" "}
        <div className="left">
          <HeaderLeft />
        </div>
        <div className="right">
          <HeaderRight />
        </div>{" "}
      </AppBar>
    );
  }
}

export default HeaderContainer;
