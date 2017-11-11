import React, { Component } from 'react';

import './styles.css'

class TopicSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      namedClass: "topic"
    }
    this.selectValue = this.props.topicValue.bind(this)
  }

  render() {
    return (
      <select className={this.state.namedClass} onBlur={() => this.selectValue(this.state.namedClass) } >
        <option value='a' >Topic</option>
        <option value='styles' >Styles</option>
        <option value='vanilla-js' >Vanilla.js</option>
        <option value='react' >React</option>
        <option value='meteor' >Meteor</option>
        <option value='mongodb' >MongoDB</option>
        <option value='apollo' >Apollo</option>
        <option value='sql' >SQL</option>
        <option value='database' >DataBases</option>
        <option value='redux' >Redux</option>
      </select>
    );
  }
}

export default TopicSelector;