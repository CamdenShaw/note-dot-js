import React, { Component } from 'react';

class Modal extends Component {
    render() {
        if(!this.props.show) {
            return null;
          }

        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
          };
      
          // The modal "window"
          const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 600,
            minHeight: 350,
            margin: '0 auto',
            padding: 30,
            marginTop: 90 
          };

        return (
            <div className="backdrop" style={backdropStyle}>
                <button className="close-modal" onClick={this.props.onClose}>Close</button>
                <div className="modal" style={modalStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;