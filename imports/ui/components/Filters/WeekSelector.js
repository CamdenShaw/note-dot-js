import React, { Component } from 'react';

class WeekSelector extends Component {
  constructor(props) {
    super(props)
     this.selectValue = this.props.weekValue.bind(this)
  }

  setPadding() {
    count = 0
    selectField = document.querySelector(".week-select")
    count = selectField.value.length
    newPadding = (selectField.offsetWidth * .5) - (count * 5)
    document.querySelector(".week-select").style.paddingLeft = `${newPadding}px`
    console.log(selectField)
  }

  componentDidUpdate() {
    this.setPadding()
  }

  componentDidMount() {
    this.setPadding()
  }

  render() {
    return (
      <select onChange={this.setPadding} className={`week-select ${this.props.namedClass}`} onBlur={() => (this.selectValue(this.props.namedClass))} >
        <option value='Week' >Week</option>
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

export default WeekSelector;
