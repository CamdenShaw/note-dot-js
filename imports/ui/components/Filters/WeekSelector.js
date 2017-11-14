import React, { Component } from 'react';
import PropTypes from 'prop-types'

class WeekSelector extends Component {
  constructor(props) {
    super(props)
     this.selectValue = this.props.weekValue.bind(this)
  }

  setPadding = () => {
    count = 0
    select = ".week-select"
    if(this.props.namedClass !== null) select = `.week-select.${this.props.namedClass}`
    selectField = document.querySelector(select)
    parent = selectField.parentNode
    count = selectField.value.length
    if(newPadding < 5) newPadding = 5
    if(parent.className === "header-left-snp") newPadding = (selectField.offsetWidth * .4) - (count * 5)
    else newPadding = (selectField.offsetWidth * .5) - (count * 5)
    document.querySelector(select).style.paddingLeft = `${newPadding}px`
  }

  onChange = () => {
    this.setPadding()
    this.selectValue(this.props.namedClass)
  }

  componentDidMount() {
    this.setPadding()
  }

  render() {
    return (
      <select id="week" name="week" onChange={this.onChange} className={`week-select ${this.props.namedClass}`} onBlur={() => (this.selectValue(this.props.namedClass))} >
        <option value='week' >Week</option>
        <option value='one' >One</option>
        <option value='two' >Two</option>
        <option value='three' >Three</option>
        <option value='four' >Four</option>
        <option value='five' >Five</option>
        <option value='six' >Six</option>
        <option value='seven' >Seven</option>
        <option value='eight' >Eight</option>
        <option value='nine' >Nine</option>
        <option value='ten' >Ten</option>
        <option value='eleven' >Eleven</option>
        <option value='twelve' >Twelve</option>
      </select>
    );
  }
}

WeekSelector.defaultProps = {
  namedClass: null
};

export default WeekSelector;
