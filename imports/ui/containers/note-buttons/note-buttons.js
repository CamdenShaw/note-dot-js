import React, { Component } from 'react';
import DeleteButton from '../../components/Buttons/DeleteButton'

import './styles.css'

class NoteButtons extends Component {
  state = {  }
  render() {
    return (
      <div className="buttons-container" >
        <DeleteButton />
        <DeleteButton />
        <DeleteButton />
      </div>
    );
  }
}

export default NoteButtons;