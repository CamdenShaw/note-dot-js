import React, { Component } from 'react';
import DeleteButton from '../../components/Buttons/DeleteButton'
import muiThemeable from 'material-ui/styles/muiThemeable';

const HeaderLeftSNP = (props) => (
  <form style={{ color: props.muiTheme.palette.accent2Color }} className="header-left-snp">
    <div>
      <label>Week</label>
      <select></select>
    </div>
    <div>
      <label>Topic</label>
      <select></select>
    </div>
  </form>
);

<<<<<<< HEAD:imports/ui/containers/header/HeaderLeftSNP.js
export default muiThemeable()(HeaderLeftSNP);
=======
export default HeaderLeftSNP;
>>>>>>> 49947ef76918a81ae73a70de0370cd0e19237d12:imports/ui/containers/header/headerLeftSNP.js
