import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {darken, fade, emphasize, lighten} from 'material-ui/utils/colorManipulator'
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

export const muiTheme= getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
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
})