import React, { Component } from 'react';
import LogoutButton from '../../components/Buttons/LogoutButton'
import ProfileButton from '../../components/Buttons/ProfileButton'

class HeaderRight extends Component {
  state = {  }
  render() {
    return (
      <div className="header-right">
        <ProfileButton />
        <LogoutButton />
      </div>
    );
  }
}

export default HeaderRight;