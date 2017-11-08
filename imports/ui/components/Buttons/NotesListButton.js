import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

const NotesListButton = props => {
  return (
    <Link to="/" >
      <RaisedButton >
        Notes List
      </RaisedButton>
    </Link>
  )
}

export default NotesListButton;