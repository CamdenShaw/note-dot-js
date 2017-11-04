import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Meteor } from 'meteor/meteor'
import App from '../imports/ui/containers/app'
import './main.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  lightBlue,
  red,
  deepOrange,
  blueGrey900,
  white
} from 'material-ui/styles/colors'
import { Routers } from './Routers'

// export default
const muiTheme = getMuiTheme(getMuiTheme(darkBaseTheme));

class NotesJS extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme} >
        <Routers />
      </MuiThemeProvider>
    )
  }
}

Meteor.startup(() => {
  render(<NotesJS />, document.getElementById('root'));
})