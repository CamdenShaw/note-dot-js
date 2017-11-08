import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable';
import { lighten } from 'material-ui/utils/colorManipulator'

import './styles.css'

const FiltersContainer = (props) => {
  return (
    <div 
      style={{
        backgroundColor: lighten(props.muiTheme.palette.alternateTextColor, 0.8),
        color: props.muiTheme.palette.textColor
      }}
      className="filters-container"
    >
      <div>FILTERS</div>
    </div>
  );
}

export default muiThemeable()(FiltersContainer);