import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import "./styles.css"

class UpVoteSelector extends Component{ 
    constructor(props){
        super(props)
        this.checkedBool= this.props.upVotes.bind(this)
    }

    onClick = () => {
        upVote = document.querySelector(".up-vote").checked
        console.log(upVote)
        this.checkedBool(upVote)
    }
    
    render() {
        return (
            <label className="switch" style={{color: this.props.muiTheme.palette.textColor}} >
                <p>Sort By UpVotes</p>
                <p className="yes-or-no"><span>no</span><span>yes</span></p>
                <input onClick={this.onClick} className="up-vote" type="checkbox" />
                <span className="slider round" style={{backgroundColor: this.props.muiTheme.palette.accent1Color}}></span>
            </label>
        )
    }
}

export default muiThemeable()(UpVoteSelector);