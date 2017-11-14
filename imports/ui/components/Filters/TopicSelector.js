import React, { Component } from 'react';

import './styles.css'

class TopicSelector extends Component {
  constructor(props) {
    super(props)
    this.selectValue = this.props.topicValue.bind(this)
  }


  setPadding = () => {
    count = 0
    select = ".topic-select"
    if(this.props.namedClass !== null) select = `.topic-select.${this.props.namedClass}`
    selectField = document.querySelector(select)
    parent = selectField.parentNode
    count = selectField.value.length
    if(parent.className === "header-left-snp") newPadding = (selectField.offsetWidth * .4) - (count * 5)
    else newPadding = (selectField.offsetWidth * .5) - (count * 5)
    if(newPadding < 5) newPadding = 1
    document.querySelector(select).style.paddingLeft = `${newPadding}px`
  }

  componentDidUpdate() {
    this.setPadding()
  }

  componentDidMount() {
    this.setPadding()
  }


  render() {
    return (
      <select id="topic" name="topic" className={`topic-select ${this.props.namedClass}`} onBlur={() => setTimeout(this.selectValue(this.props.namedClass), 1) } onChange={this.setPadding} >
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