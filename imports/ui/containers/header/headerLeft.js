import React, { Component } from "react";
import muiThemeable from "material-ui/styles/muiThemeable";
import NewNoteButton from "../../components/Buttons/NewNoteButton";
import "./styles.css";

import { url } from "../app";

const HeaderLeft = props => {
  const profileUrl = `${url}/profile`;
  return (
    <div
      className="header-left"
      style={{ color: props.muiTheme.palette.accent2Color }}
    >
      {thisUrl === profileUrl ? (
        <div style={{ padding: 10 }}>
          <h4>username</h4>
          <p>Avatar</p>
        </div>
      ) : (
        null
      )}
      {thisUrl === profileUrl ? (
        <div style={{ padding: 10 }}>
          <h4>userbio</h4>
          <p>otherinfo</p>
        </div>
      ) : (
        <NewNoteButton />
      )}
    </div>
  );
};

export default muiThemeable()(HeaderLeft);
