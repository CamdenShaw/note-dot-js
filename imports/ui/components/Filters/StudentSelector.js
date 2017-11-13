import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

import { Users } from "../../../api/students";

class StudentSelector extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <select>
        {this.props.allUsers.map((user, index) => (
          <option key={index} item={user.emails[0].address}>
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
