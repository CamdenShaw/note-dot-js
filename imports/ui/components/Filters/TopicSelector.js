import React, { Component } from 'react';

import './styles.css'

class TopicSelector extends Component {
  constructor(props) {
    super(props)
    this.selectValue = this.props.topicValue.bind(this)
  }


  setPadding() {
    count = 0
    selectField = document.querySelector(".topic-select")
    count = selectField.value.length
    newPadding = (selectField.offsetWidth * .5) - (count * 5)
    document.querySelector(".topic-select").style.paddingLeft = `${newPadding}px`
  }

  componentDidUpdate() {
    this.setPadding()
  }

  componentDidMount() {
    this.setPadding()
  }


  render() {
    return (
      <select className={`topic-select ${this.props.namedClass}`} onBlur={() => setTimeout(this.selectValue(this.props.namedClass), 1) } onChange={this.setPadding} >
        <option value='Topic' >Topic</option>
        <option value='styles' >Styles</option>
        <option value='vanilla-js' >Vanilla.js</option>
        <option value='react' >React</option>
        <option value='meteor' >Meteor</option>
        <option value='mongodb' >Mongodb</option>
        <option value='apollo' >Apollo</option>
        <option value='sql' >SQL</option>
        <option value='database' >DataBases</option>
        <option value='redux' >Redux</option>
      </select>
    );
  }
}

export default TopicSelector;