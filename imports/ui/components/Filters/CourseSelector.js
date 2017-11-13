import React, { Component } from 'react';

class CourseSelector extends Component {
  state = {  }

  setPadding() {
    count = 0
    selectField = document.querySelector(".course-select")
    count = selectField.value.length
    newPadding = (selectField.offsetWidth * .5) - (count * 5)
    document.querySelector(".course-select").style.paddingLeft = `${newPadding}px`
  }

  componentDidUpdate() {
    this.setPadding()
  }

  componentDidMount() {
    this.setPadding()
  }

  render() {
    return (
      <select onChange={this.setPadding}>
        <option className="course-select" value='Course' >Course</option>
      </select>
    );
  }
}

export default CourseSelector;