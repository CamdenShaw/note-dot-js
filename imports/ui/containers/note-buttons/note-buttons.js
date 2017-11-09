import React, { Component } from 'react';
import DeleteButton from '../../components/Buttons/DeleteButton'
import SaveButton from '../../components/Buttons/SaveButton'
import PublishButton from '../../components/Buttons/PublishButton'
import LogoutButton from '../../components/Buttons/LogoutButton'
import ProfileButton from '../../components/Buttons/ProfileButton'
import NotesListButton from '../../components/Buttons/NotesListButton'

import './styles.css'

const NoteButtons = (R) => {
  console.log(R.R)
    return (
      <div className="buttons-container" >
        {R.R===true ? <PublishButton /> : <NotesListButton height='25px' />}
        {R.R===true ? <SaveButton /> : <ProfileButton height='25px' />}
        {R.R===true ? <DeleteButton /> : <LogoutButton height='25px' />}
      </div>
    );
}

export default NoteButtons;