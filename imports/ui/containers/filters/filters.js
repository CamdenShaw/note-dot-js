import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { lighten } from 'material-ui/utils/colorManipulator';
import { StudentSelector, TopicSelector, UpVotes, WeekSelector } from '../../components/Filters'

import './styles.css'

const FiltersContainer = (props) => {
  return (
    <div 
      style={{
        backgroundColor: lighten(props.muiTheme.palette.alternateTextColor, 0.8),
        color: props.muiTheme.palette.textColor,
        fontFamily: props.muiTheme.fontFamily
      }}
      className="filters-container"
    >
      <div className="filters">
        <h3>FILTERS</h3>
        <form className="filters-form" >
          <StudentSelector />
          <TopicSelector />
          <WeekSelector />
          <UpVotes />
        </form>
      </div>
    </div>
  );
}

export default muiThemeable()(FiltersContainer);