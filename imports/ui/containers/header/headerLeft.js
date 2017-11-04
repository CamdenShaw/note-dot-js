import React, { Component } from 'react';
import NewNoteButton from '../../components/Buttons/NewNoteButton'
import './styles.css'

class HeaderLeft extends Component {
  state = {  }
  render() {
    return (
      <div className="header-left">
        <div> adp </div>
        <NewNoteButton />
      </div>
    );
  }
}

export default HeaderLeft;