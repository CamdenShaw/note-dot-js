import React, { Component } from 'react';

import DeleteButton from '../../components/Buttons/DeleteButton';
import SaveButton from '../../components/Buttons/SaveButton';
import PublishButton from '../../components/Buttons/PublishButton';

import './styles.css'

const HeaderRight = props => (
    <div className="modal-header-right">
        <PublishButton noteTitle={ props.noteTitle } publishNote={ props.publishNote }/>
        <SaveButton noteTitle={props.noteTitle} addNote={props.addNote} />
        <DeleteButton removeNote={props.removeNote}/>
    </div>
)

export default HeaderRight