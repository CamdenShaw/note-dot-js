import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { WeekSelector, TopicSelector } from '../../components/Filters/'

import "./styles"

const HeaderLeft = props => (
  <form
    style={{ color: props.muiTheme.palette.accent2Color }}
    className="header-left-snp"
  >
    <input type="text" name="title" className="title-input" placeholder="Title" />
    <WeekSelector />
    <TopicSelector />
  </form>
);

export default muiThemeable()(HeaderLeft);