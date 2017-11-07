import React from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { withTracker } from "meteor/react-meteor-data";
import { muiTheme } from "../../config/theme";
import { Routers } from "../../../startup/client/routes";
import { Notes } from "../../../api/notes";

import HeaderContainer from "../header/header";
import { thisUrl } from '../header/header'

import "./styles.css";

import NotesEditor from "../../components/Notes/NoteEditor";

export const url = `http://localhost:3000`;
const loginUrl = `${url}/login`

export const Layout = ({ children }) => (
  <div className="main">
    { thisUrl !== loginUrl && <HeaderContainer /> }
    <div className="content">{children}</div>
  </div>
);

export const MuiThemedApp = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Routers />
  </MuiThemeProvider>
);

Layout.defaultProps = {
  notes: {}
};

Layout.PropTypes = {
  notes: PropTypes.array.isRequired,
  currentUserId: PropTypes.string
};

export default withTracker(() => {
  Meteor.subscribe("notes");
  console.log(Notes);
  return {
    currentUserId: Meteor.userId(),
    notes: Notes.find({}).fetch()
  };
})(Layout);
