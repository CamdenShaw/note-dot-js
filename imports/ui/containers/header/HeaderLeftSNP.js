import React, { Component } from 'react';
import DeleteButton from '../../components/Buttons/DeleteButton'

class HeaderLeftSNP extends Component {
  state = {  }
  render() {
    return (
      <div className="header-left-snp">
        <DeleteButton />
        <DeleteButton />
      </div>
    );
  }
}

export default HeaderLeftSNP;