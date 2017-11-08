import React from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from '../../config/theme';
import { Routers } from '../../../startup/client/routes';

import HeaderContainer from "../header/header";
import Filters from "../filters/"
import { thisUrl } from '../header/header'

import "./styles.css";

import NotesEditor from "../../components/Notes/NoteEditor";

export const url = `http://localhost:3000`;
const loginUrl = `${url}/login`
const noteUrl = `${url}/note`

const Layout = ({ children }) => (
  <div className="main">
    { thisUrl !== loginUrl && <HeaderContainer /> }
    <div className="content">
      { thisUrl !== loginUrl && thisUrl !== noteUrl && <Filters /> }
      { children }
    </div>
  </div>
);

export const MuiThemedApp = () => (
  <MuiThemeProvider muiTheme={muiTheme} >
    <Routers />
  </MuiThemeProvider>
)

export default Layout;
