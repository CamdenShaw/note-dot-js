import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Meteor } from 'meteor/meteor'
import App from '../imports/ui/containers/app'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {darken, fade, emphasize, lighten} from 'material-ui/utils/colorManipulator';
import {
  lightBlueA200,
  deepOrange500,
  deepOrange300,
  deepOrange700,
  blueGrey100,
  blueGrey200,
  blueGrey400,
  blueGrey500,
  indigo50,
  brown900,
  teal50,
  teal500,
  amber50,
  amber900,
  faintBlack,
  deepPurple900
} from 'material-ui/styles/colors'
import { Routers } from './Routers'

import './main.css';

// export default
muiTheme= getMuiTheme({
  palette: {
    primary1Color: deepOrange700,
    primary2Color: blueGrey400,
    primary3Color: deepOrange300,
    accent1Color: lightBlueA200,
    accent2Color: blueGrey100,
    accent3Color: blueGrey500,
    textColor: darken(amber900, 0.9),
    alternateTextColor: amber50,
    canvasColor: teal50,
    borderColor: blueGrey200,
    pickerHeaderColor: teal500,
    shadowColor: faintBlack,
  },
  appBar: {
    color: darken(deepPurple900, 0.6)
  }
});

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