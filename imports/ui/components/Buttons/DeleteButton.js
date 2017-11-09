import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import FontAwesome from "react-fontawesome";
import './styles.css'

const DeleteButton = props => {
  return (
    <RaisedButton className="delete" >
      Delete
      <FontAwesome
        className='delete'
        name='trash-o'
        size='lg'
      />
    </RaisedButton>
  )
}

export default DeleteButton;