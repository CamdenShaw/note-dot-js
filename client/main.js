import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { MuiThemedApp } from '../imports/ui/containers/app'

import './main.css';

Meteor.startup(() => {
  render(<MuiThemedApp />, document.getElementById('root'));
})