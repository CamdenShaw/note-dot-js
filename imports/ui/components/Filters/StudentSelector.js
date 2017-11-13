import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withTracker } from 'meteor/react-meteor-data'

import { Users } from "../../../api/students"

class StudentSelector extends Component {
  state = {  }
  render() {
    console.log(this.props)
    return (
      <select>
        <option value='' >Student</option>
      </select>
    );
  }
}

export default withTracker(() => { 
  Meteor.subscribe("users")

  return {
    email: Meteor.users.find().fetch()
  }
})(StudentSelector)

// export default StudentSelector