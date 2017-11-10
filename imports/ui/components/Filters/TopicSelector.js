import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable'

import './styles.css'

const TopicSelector = props => {
  return (
    <select>
      <option value='styles' >Styles</option>
      <option value='vanilla-js' >Vanilla.js</option>
      <option value='react' >React</option>
      <option value='meteor' >Meteor</option>
      <option value='mongodb' >MongoDB</option>
      <option value='apollo' >Apollo</option>
      <option value='sql' >SQL</option>
      <option value='database' >DataBases</option>
      <option value='redux' >Redux</option>
      <option value='' >Topic</option>
    </select>
  );
}

export default muiThemeable()(TopicSelector);