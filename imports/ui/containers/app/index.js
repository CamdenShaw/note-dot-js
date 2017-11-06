import React from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from '../../config/theme';
import { Routers } from '../../../../client/Routers';

import HeaderContainer from "../header/header";

import "./styles.css";

import NotesEditor from "../../components/Notes/NoteEditor";

export const url = "http://local:3000";
const thisUrl = window.location.href;

const Layout = ({ children }) => (
  <div className="main">
    <HeaderContainer />
    <div className="content">{children}</div>
  </div>
);

export const MuiThemedApp = () => (
  <MuiThemeProvider muiTheme={muiTheme} >
    <Routers />
  </MuiThemeProvider>
)

export default Layout;
