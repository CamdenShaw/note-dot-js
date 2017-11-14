import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import FontAwesome from "react-fontawesome";
import { withTracker } from "meteor/react-meteor-data"

import { Notes } from "../../../api/notes"

import './styles.css'

class UpVoteButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      x: 0,
      disabledBool: false
    }
  }

  count() {
    thisNote.upVote++
    this.setState({disabledBool: true})
    Meteor.call("notes.upVote", thisNote.upVote, thisNote._id)
    console.log(thisNote, this.props.currentUserId)
  }

  setBoolState(thisNoteBool){
    this.setState({disabledBool: thisNoteBool.boolean})
  }

  componentDidMount() {
    console.log(this.props)
    if(this.props.notes) {
      thisNote = this.props.notes.find(note => {
        return note._id === this.props.oldNote
      })
      console.log(this.props.notes)
      console.log(thisNote.upVoteBool)
      thisNoteBool = thisNote.upVoteBool.find(upVoter => {
        return upVoter.user === this.props.currentUserId
      })
      console.log(thisNoteBool)
      thisNoteBool && this.setBoolState(thisNoteBool)
      console.log("this Note Bool", this.state)
    }
  }
  
  render() {
    return (
      <RaisedButton disabled={this.state.disabledBool} onClick={() => this.count()} >
        Up Vote <span className="plus">+</span>
      </RaisedButton>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe("notes");
  return {
    currentUserId: Meteor.userId(),
    notes: Notes.find().fetch(),
  };
})(UpVoteButton);