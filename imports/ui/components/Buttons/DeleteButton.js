import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import './styles.css'

const DeleteButton = props => {
  return (
    <RaisedButton className="delete" >
      Delete
    </RaisedButton>
  )
}

export default DeleteButton;