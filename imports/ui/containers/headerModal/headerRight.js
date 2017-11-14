import React, { Component } from 'react';
import { withTracker } from "meteor/react-meteor-data";

import DeleteButton from '../../components/Buttons/DeleteButton';
import SaveButton from '../../components/Buttons/SaveButton';
import PublishButton from '../../components/Buttons/PublishButton';
import UpVoteButton from '../../components/Buttons/UpVoteButton'

import './styles.css'

const HeaderRight = props => {

    oldOwner = props.oldNote.owner || null
    currentUser = props.currentUserId

    return (
        <div className="modal-header-right">
            {(oldOwner === currentUser || oldOwner == null) ? <PublishButton noteTitle={ props.noteTitle } publishNote={ props.publishNote }/> : <UpVoteButton oldNote={props.oldNote._id} />}
            {(oldOwner === currentUser || oldOwner == null) && <SaveButton noteTitle={props.noteTitle} addNote={props.addNote} />}
            {(oldOwner === currentUser || oldOwner == null) && <DeleteButton removeNote={props.removeNote}/>}
        </div>
    )
}

export default withTracker(() => {
  Meteor.subscribe("allUsers");
  return {
    currentUserId: Meteor.userId(),
  };
})(HeaderRight);