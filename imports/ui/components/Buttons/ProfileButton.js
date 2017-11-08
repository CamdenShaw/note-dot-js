import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

const ProfileButton = props => {
  return (
    <Link to='/profile'>
      <RaisedButton className="profile" secondary >
        Profile
      </RaisedButton>
    </Link>
  )
}

export default ProfileButton;