import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { MuiThemedApp } from '../imports/ui/containers/app'

import './main.css';

// export default


Meteor.startup(() => {
  render(<MuiThemedApp />, document.getElementById('root'));
})