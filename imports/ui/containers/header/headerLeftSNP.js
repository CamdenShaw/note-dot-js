<<<<<<< HEAD
import React from 'react';
import DeleteButton from '../../components/Buttons/DeleteButton'
import muiThemeable from 'material-ui/styles/muiThemeable';
=======
import React, { Component } from "react";
import DeleteButton from "../../components/Buttons/DeleteButton";
import muiThemeable from "material-ui/styles/muiThemeable";
>>>>>>> fa16a965baf139dcac36b7f203de80a0bc82bc3b

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

<<<<<<< HEAD
export default muiThemeable()(HeaderLeftSNP);
=======
export default muiThemeable()(HeaderLeftSNP);
>>>>>>> fa16a965baf139dcac36b7f203de80a0bc82bc3b
