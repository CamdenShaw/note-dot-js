import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import "./styles.css"

const UpVoteSelector = props => (
    <label className="switch" style={{color: props.muiTheme.palette.textColor}} >
        <p>Sort By UpVotes</p>
        <p className="yes-or-no"><span>no</span><span>yes</span></p>
        <input type="checkbox" />
        <span className="slider round" style={{backgroundColor: props.muiTheme.palette.accent1Color}}></span>
    </label>
)

export default muiThemeable()(UpVoteSelector);