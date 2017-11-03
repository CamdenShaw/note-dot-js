import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import HeaderLeft from './headerLeft'

import './styles.css'

const thisUrl = window.location.href

class HeaderContainer extends Component {
  render() {
    return (
      <AppBar style={{height: 90}}> <div className="left"></div><div className="right"></div> </AppBar>
    )
  }
}

export default HeaderContainer