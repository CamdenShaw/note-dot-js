import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import NewNoteButton from '../../components/Buttons/NewNoteButton'
import './styles.css'

const HeaderLeft = (props) => {
  return (
    <div className="header-left">
      <div style={{color: props.muiTheme.palette.accent2Color}}> adp </div>
      <NewNoteButton />
    </div>
  )
}

export default muiThemeable()(HeaderLeft);