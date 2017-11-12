import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withTracker } from 'meteor/react-meteor-data'

// import { Users } from '../../../api/students'

class StudentSelector extends Component {
  state = {  }
  render() {
    return (
      <select>
        <option value='' >Student</option>
      </select>
    );
  }
}

// export default withTracker(() => { 
//   Meteor.subscribe("users")

//   return {
//     userId: Users._id(),
//     email: Users.find({}).fetch()
//   }
// })(StudentSelector)

export default StudentSelector