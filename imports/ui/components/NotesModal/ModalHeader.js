import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

import "./styles.css";

class ModalHeader extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="inputs" />
        <div className="buttons">
          <div className="buttons-wrapper">
                <FontAwesome
                    className='share' 
                    name='share-square-o'
                    size='lg' />
                <FontAwesome
                    className='save'
                    name='floppy-o'
                    size='lg' />
                <FontAwesome
                    className='edit'
                    name='pencil-square-o'
                    size='lg' />
                <FontAwesome
                    className='delete'
                    name='trash-o'
                    size='lg' />
          </div>
        </div>
      </div>
    );
  }
}

export default ModalHeader
