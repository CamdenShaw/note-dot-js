import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

const thisUrl = window.location.href

class HeaderContainer extends Component {
  render() {
    return (
      <AppBar style={{height: 90}} />
    )
  }
}

export default HeaderContainer