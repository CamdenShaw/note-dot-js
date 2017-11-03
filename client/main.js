import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Meteor } from 'meteor/meteor'
import App from '../imports/ui/containers/app'
import './main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import createPallet from 'material-ui/styles/createPalette'
import {
  cyan500, cyan700,
  grey400, grey100, grey500, grey300,
  pinkA200,
  darkBlack, white, fullBlack
} from 'material-ui/colors'
import { Routers } from './Routers'

let muiTheme = createMuiTheme({
  palette: createPallet({
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: darkBlack,
    pickerHeaderColor: cyan500,
    clockCircleColor: darkBlack,
    shadowColor: fullBlack,
  })
})

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
  injectTapEventPlugin();
  render(Routers(), document.getElementById('root'));
})