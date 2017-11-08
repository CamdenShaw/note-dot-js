import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable';

import './styles.css'

const FiltersContainer = () => {
  render() {
    return (
      <div className="filters-container">
        FILTERS
      </div>
    );
  }
}

export default muiThemable()(FiltersContainer);