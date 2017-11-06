import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

const NewNoteButton = props => {
  return (
    <Link to='/note'>
      <RaisedButton primary >
        New Note
      </RaisedButton>
    </Link>
  )
}

export default NewNoteButton;