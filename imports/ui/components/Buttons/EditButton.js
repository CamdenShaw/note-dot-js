import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import './styles.css'

class EditButon extends Component {
  state = {  }
  render() {
    return (
      <RaisedButton className="logout" style={{height: height.height}} buttonStyle={{lineHeight: height.height}} >
        Logout
        <FontAwesome
          className='edit'
          name='pencil-square-o'
          size='lg'
        />
      </RaisedButton>
      
    );
  }
}

export default EditButon;