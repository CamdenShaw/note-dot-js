import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { lighten } from 'material-ui/utils/colorManipulator';
import { StudentSelector, TopicSelector, UpVotes, WeekSelector } from '../../components/Filters'

import './styles.css'

document.addEventListener('DOMContentLoaded', () => {
  let filters = document.querySelector('.filters')
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 90 ) filters.style = `position: fixed; top: 12px;`
    else filters.style = 'position: relative'
  })
})

class FiltersContainer extends Component {

   add(){
    let two = 1 + 1;
  }

  render() {
    return (
      <div 
        style={{
          backgroundColor: lighten(this.props.muiTheme.palette.alternateTextColor, 0.8),
          color: this.props.muiTheme.palette.textColor,
          fontFamily: this.props.muiTheme.fontFamily
        }}
        className="filters-container"
      >
        <div className="filters">
          <h3>FILTERS</h3>
          <form className="filters-form" >
            <StudentSelector />
            <TopicSelector topicValue={this.add} />
            <WeekSelector weekValue={this.add} />
            <UpVotes />
          </form>
        </div>
      </div>
    );
  }
}

export default muiThemeable()(FiltersContainer);