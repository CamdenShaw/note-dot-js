import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import App from '../imports/ui/containers/app/'

import './main.css';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
})