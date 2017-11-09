import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import FontAwesome from "react-fontawesome";

const SaveButton = props => {
  return (
    <RaisedButton className="save" >
      Save
      <FontAwesome
        className='save'
        name='floppy-o'
        size='lg'
      />
    </RaisedButton>
  )
}

export default SaveButton;