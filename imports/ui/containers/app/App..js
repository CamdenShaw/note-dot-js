import React from 'react'
import PropTypes from 'prop-types'

import HeaderContainer from '../header/header'

import './styles.css'

export const url = 'http://local:3000'
const thisUrl = window.location.href

const Layout = ({ children }) => (
  <div className="main">
    <HeaderContainer />
    <h1>Welcome to Note.js!</h1>
    {children}
  </div>
)

export default Layout


