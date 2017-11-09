import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

const NotesListButton = (height, props) => {
  return (
    <Link to="/" >
      <RaisedButton className="notes-list" style={{ height: height.height}} buttonStyle={{lineHeight: height.height }} >
        Notes List
      </RaisedButton>
    </Link>
  )
}

export default NotesListButton;