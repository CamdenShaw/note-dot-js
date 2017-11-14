import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

import { Users } from "../../../api/students";
  
class StudentSelector extends Component {
  constructor(props){
    super(props)
    state = {};
    this.studentValue = this.props.studentValue.bind(this)
  }
  setPadding = () => {
    count = 0
    selectField = document.querySelector(".student-select")
    parent = selectField.parentNode
    count = selectField.value.length
    newPadding = (selectField.offsetWidth * .5) - (count * 5)
    if(newPadding < 5) newPadding = 5
    document.querySelector(".student-select").style.paddingLeft = `${newPadding}px`
  }

  componentDidMount() {
    this.setPadding()
  }

  onClick = () => {
    this.setPadding()
    this.studentValue("student-select")
  }

  render() {
    return (
      <select className="student-select" onChange={this.onClick}>
        <option value="student" >Student</option>
        {this.props.allUsers.map((user, index) => {
          userName = user.emails[0].address.split('@')[0].replace('.', ' ')
          return (<option  key={index} className={`student-${index}`} value={userName.replace(' ', '-')}>
            {userName}
          </option>)
        })
      }}
      </select>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("allUsers");
  Meteor.subscribe("users");
  return {
    allUsers: Meteor.users.find().fetch(),
    users: Meteor.users.find().fetch()
  };
})(StudentSelector);

// export default StudentSelector;
