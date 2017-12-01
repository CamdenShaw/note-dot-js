import React, { Component } from "react"
import PropTypes from "prop-types"
import "./styles.css"

import HeaderContainer from "../../containers/header/header"
import Filters from "../../containers/filters/"

export const url = `https://note-dot-js.herokuapp.com`
const loginUrl = `${url}/login`
const noteUrl = `${url}/note`

const Layout = ({ children }) => {
    thisUrl = window.location.href
    return (
        <div className="app-wrapper">
            {thisUrl !== loginUrl &&
                thisUrl !== noteUrl && <HeaderContainer thisUrl={thisUrl} />}
            {children}
            <div className="app-footer" />
        </div>
    )
}

Layout.defaultProps = {
    children: null
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout
