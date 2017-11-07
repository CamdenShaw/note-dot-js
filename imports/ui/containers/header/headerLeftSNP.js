import React, { Component } from "react";
import DeleteButton from "../../components/Buttons/DeleteButton";
import muiThemeable from "material-ui/styles/muiThemeable";

const HeaderLeftSNP = props => (
  <form
    style={{ color: props.muiTheme.palette.accent2Color }}
    className="header-left-snp"
  >
    <div>
      <label>Week</label>
      <select />
    </div>
    <div>
      <label>Topic</label>
      <select />
    </div>
  </form>
);

export default muiThemeable()(HeaderLeftSNP);
