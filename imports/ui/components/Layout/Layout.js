import React, { Component } from "react";
import PropTypes from "prop-types";
import './styles.css'

import HeaderContainer from "../../containers/header/header";
import Filters from "../../containers/filters/"
import { thisUrl } from '../../containers/header/header'


export const url = `http://localhost:3000`;
const loginUrl = `${url}/login`;
const noteUrl = `${url}/note`;

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
        <div className="app-header">
            { thisUrl !== loginUrl && <HeaderContainer /> }
        </div>
      <div className="app-content">
        { thisUrl !== loginUrl && thisUrl !== noteUrl && <Filters /> }
        {children}
      </div>
      <div className="app-footer">
      </div>  
    </div>
  );
};

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout
