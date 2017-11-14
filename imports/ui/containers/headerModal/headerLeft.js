import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { WeekSelector, TopicSelector } from '../../components/Filters/'

import "./styles"

class HeaderLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      week: 0,
      topic: 'none',
      title: ''
    }
    this.headerFormValue = this.props.headerFormValue.bind(this)
  }

  selectValue = (x) => {
    if (x === 'week') {
      week = document.querySelector(`.${x}`).value
      this.setState({
        week
      })
    } else if (x === 'topic') {
      topic = document.querySelector(`.${x}`).value
      this.setState({
        topic
      })
    } else {
      title = document.querySelector(`.${x}`).value
      this.setState({
        title
      })
    }
  }

  submitted = () => {
    let { title, week, topic } = this.state
    this.headerFormValue(title, week, topic)
  }


  addTitle() {
    document.querySelector('.title-input').value = this.props.oldNote.title;
    document.querySelector('.title-input').placeholder = this.props.oldNote.title;
  }

  addWeek() {
    formElement = document.querySelector('.header-left-snp')
    for(i = 0; formElement.week.length > i; i++){
      if(formElement.week[i].value === this.props.oldNote.week ) formElement.week[i].selected = true
    }
  }

  addTopic() {
    formElement = document.querySelector('.header-left-snp')
    for(i = 0; formElement.topic.length > i; i++) {
      if(formElement.topic[i].value === this.props.oldNote.topic) formElement.topic[i].selected = true
    }
  }

  componentDidMount() {
    if(this.props.oldNote.owner !== null) {
      this.addTitle()
      this.addWeek()
      this.addTopic()
    }
  }

  render(){
    return (
      <form
        onBlur={() => setTimeout(this.submitted, 1)}
        style={{ color: this.props.muiTheme.palette.accent2Color }}
        className="header-left-snp"
      >
        <input 
          onBlur={() => this.selectValue('title-input')}
          type="text" 
          name="title" 
          className="title-input" 
          placeholder="Title" 
        />
        <WeekSelector namedClass={"week"} weekValue={this.selectValue} />
        <TopicSelector namedClass={"topic"} topicValue={this.selectValue} />
      </form>
    )
  }
}

export default muiThemeable()(HeaderLeft);