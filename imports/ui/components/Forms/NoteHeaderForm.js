import React, { Component } from 'react';
import { WeekSelector, TopicSelector } from '../Filters/'

class NoteHeaderForm extends Component {
    constructor(props) {
        super(props)
        state = {  }
        // this.editorValue = this.props.editorValue.bind(this);
    }
    render() {
        return (
            <div>
                <input type="text" name="title" className="title-input" placeholder="Title" />
                <WeekSelector />
                <TopicSelector />
            </div>
        );
    }
}

export default NoteHeaderForm;