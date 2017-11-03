import React, { Component } from 'react';
import DeleteButton from '../../components/Buttons/DeleteButton'

class HeaderRight extends Component {
  state = {  }
  render() {
    return (
      <div className="header-right">
        <DeleteButton />
        <DeleteButton />
      </div>
    );
  }
}

export default HeaderRight;