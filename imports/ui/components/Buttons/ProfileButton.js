import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

const ProfileButton = (height, props) => {
  return (
    <Link to='/profile'>
      <RaisedButton className="profile" style={{height: height.height}} buttonStyle={{lineHeight: height.height}} secondary >
        Profile
      </RaisedButton>
    </Link>
  )
}

export default ProfileButton;