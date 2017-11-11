import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import FontAwesome from "react-fontawesome";
import './styles.css'

const DeleteButton = props => {
  return (
    <RaisedButton className="delete" onClick={props.removeNote}>
      Delete <FontAwesome className='delete' name='trash-o' />
    </RaisedButton>
  )
}

export default DeleteButton;