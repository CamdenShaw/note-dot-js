import React, { Component } from 'react';
import Modal from '../../components/NotesModal';

import NotesEditor from '../../components/Notes/NoteEditor'
import ModalHeader from '../../components/NotesModal/ModalHeader'
class Note extends Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
      }

      toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return (
            <div>
                <button onClick={this.toggleModal}>
                    New Note
                </button>
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    
                    <NotesEditor />
                </Modal>
            </div>
        );
    }
}

export default Note