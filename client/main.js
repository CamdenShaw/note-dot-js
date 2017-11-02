import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import App from '../imports/ui/containers/App'
import './main.css';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider'

import Routers from './Router'

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
  ReactDOM.render(
    <NotesJS />,
    document.getElementById('root')
  );
})