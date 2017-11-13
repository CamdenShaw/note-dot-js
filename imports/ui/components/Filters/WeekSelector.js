import React, { Component } from 'react';

class WeekSelector extends Component {
  constructor(props) {
    super(props)
     this.selectValue = this.props.weekValue.bind(this)
  }

  render() {
    return (
      <select className={this.props.namedClass} onBlur={() => (this.selectValue(this.props.namedClass))} >
        <option value='' >Week</option>
        <option value='1' >One</option>
        <option value='2' >Two</option>
        <option value='3' >Three</option>
        <option value='4' >Four</option>
        <option value='5' >Five</option>
        <option value='6' >Six</option>
        <option value='7' >Seven</option>
        <option value='8' >Eight</option>
        <option value='9' >Nine</option>
        <option value='10' >Ten</option>
        <option value='11' >Eleven</option>
        <option value='12' >Twelve</option>
      </select>
    );
  }
}

export default WeekSelector;
