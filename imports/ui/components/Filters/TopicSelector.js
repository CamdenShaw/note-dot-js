import React, { Component } from 'react';

import './styles.css'

class TopicSelector extends Component {
  constructor(props) {
    super(props)
    this.selectValue = this.props.topicValue.bind(this)
  }

  render() {
    return (
      <select className={this.props.namedClass} onBlur={() => setTimeout(this.selectValue(this.props.namedClass), 1) } >
        <option value='' >Topic</option>
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