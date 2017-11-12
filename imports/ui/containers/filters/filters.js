import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { lighten } from 'material-ui/utils/colorManipulator';
import { StudentSelector, TopicSelector, UpVotes, WeekSelector } from '../../components/Filters'

import './styles.css'

document.addEventListener('DOMContentLoaded', () => {
  let top, filterTop, filters
  window.addEventListener('scroll', (e) => {
    top = window.scrollY
    filterTop = 100
    if((top > 0) && (top < 90)) filterTop =  filterTop - top
    if(top >=  90) filterTop = 10
    document.querySelector('.filters').style = `top: ${filterTop}px`
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