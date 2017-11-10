import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {darken, fade, emphasize, lighten} from 'material-ui/utils/colorManipulator'
import {
  lightBlueA200,
  deepOrange400,
  deepOrange300,
  blueGrey100,
  blueGrey200,
  blueGrey400,
  blueGrey500,
  indigo50,
  brown900,
  teal50,
  teal500,
  amber100,
  amber900,
  faintBlack,
  deepPurple900
} from 'material-ui/styles/colors'

export const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: darken(deepOrange300, 0.1),
    primary2Color: blueGrey400,
    primary3Color: deepOrange300,
    accent1Color: lightBlueA200,
    accent2Color: blueGrey100,
    accent3Color: blueGrey500,
    textColor: darken(amber900, 0.6),
    alternateTextColor: amber100,
    canvasColor: teal50,
    borderColor: blueGrey200,
    pickerHeaderColor: teal500,
    shadowColor: faintBlack,
  },
  appBar: {
    color: darken(deepPurple900, 0.6)
  }
})