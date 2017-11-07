import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import NewNoteButton from '../../components/Buttons/NewNoteButton'
import './styles.css'

import { url } from '../app'
import { thisUrl } from './header'


const HeaderLeft = (props) => {
  const profileUrl = `${url}/profile`
  {console.log(thisUrl, profileUrl)}
  return (
    <div className="header-left" style={{ color: props.muiTheme.palette.accent2Color }}>
      { thisUrl === profileUrl ?
          <div style={{ padding: 10 }}>
            <h4>username</h4>
            <p>Avatar</p>
          </div>
          : <h4>adp</h4>
      }
      { thisUrl === profileUrl ? 
        <div style={{ padding: 10 }}>
          <h4>userbio</h4>
          <p>otherinfo</p>
        </div> 
        : <NewNoteButton />
      }
    </div>)
}

export default muiThemeable()(HeaderLeft);