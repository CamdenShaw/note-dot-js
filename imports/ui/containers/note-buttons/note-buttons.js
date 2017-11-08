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
        {R.R===true ? <PublishButton /> : <NotesListButton />}
        {R.R===true ? <SaveButton /> : <ProfileButton />}
        {R.R===true ? <DeleteButton /> : <LogoutButton />}
      </div>
    );
}

export default NoteButtons;