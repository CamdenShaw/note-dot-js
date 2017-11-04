import React, { Component } from 'react';

import NotesEditor from '../../components/Notes/NoteEditor'
class Note extends Component {
    render() {
        return (
            <div>
                <h1> Notes Page </h1>
                <NotesEditor />
            </div>
        );
    }
}

export default Note

