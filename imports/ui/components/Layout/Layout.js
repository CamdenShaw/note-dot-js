import React, { Component } from "react";
import PropTypes from "prop-types";

import HeaderContainer from "../../containers/header/header";
import { thisUrl } from '../../containers/header/header'

export const url = `http://localhost:3000`;
const loginUrl = `${url}/login`

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
        <div className="appHeader">
            { thisUrl !== loginUrl && <HeaderContainer /> }
        </div>
      <div className="app-content">{children}</div>
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
