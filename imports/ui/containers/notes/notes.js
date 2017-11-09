import React, { Component } from 'react';
import Modal from '../../components/NotesModal';

import NotesEditor from '../../components/Notes/NoteEditor'
import ModalHeader from '../../components/NotesModal/ModalHeader'
import HeaderContainer from '../header/header'

class Note extends Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: true };
      }

      toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      componentWillMount() {
          this.props.thisUrl = window.location.href
          console.log('note render', this.props.thisUrl)
      }

    render() {
        thisUrl = window.location.href
        return (
            <div>
                <button onClick={this.toggleModal}>
                    New Note
                </button>
                <Modal
                    show={this.state.isOpen}
                    onClose={this.toggleModal}
                >
                    <HeaderContainer thisUrl={thisUrl}/>
                    <NotesEditor />
                </Modal>
            </div>
        );
    }
}

export default Note