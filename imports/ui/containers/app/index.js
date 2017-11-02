import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

import NoteEditor from '../../components/Notes/NoteEditor'

export const url = 'http://local:3000'
const thisUrl = window.location.href

const Layout = ({ children }) => (
  <div>
    <h1>Welcome to Note.js!</h1>
  </div>
)

export default Layout