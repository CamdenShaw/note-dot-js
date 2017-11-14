import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

import { Users } from "../../../api/students";
  
class StudentSelector extends Component {
  state = {};

  setPadding() {
    count = 0
    selectField = document.querySelector(".student-select")
    parent = selectField.parentNode
    count = selectField.value.length
    newPadding = (selectField.offsetWidth * .5) - (count * 5)
    if(newPadding < 5) newPadding = 5
    document.querySelector(".student-select").style.paddingLeft = `${newPadding}px`
  }

  changeSelect() {
    this.setPadding
  }

  componentDidMount() {
    this.setPadding()
  }

  render() {
    return (
      <select className="student-select" onChange={this.setPadding}>
        <option value="Student" >Student</option>
        {this.props.allUsers.map((user, index) => (
          <option  key={index} className={`student-${index}`} value={user.emails[0].address}>
            {user.emails[0].address}
          </option>
        ))}
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
