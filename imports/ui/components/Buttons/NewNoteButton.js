import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";
import Note from "../../containers/notes/notes";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class NewNoteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.open
    });
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div>
        <RaisedButton label="Add Note" primary onClick={this.handleOpen}/>
          <Dialog
            actions={actions}
            modal={true}
            open={this.state.open}
          >
            <Note/>
          </Dialog>
        </div>
    );
  }
}

export default NewNoteButton;

// const NewNoteButton = props => {
//   return (
//     <Link to="/note">
//       <RaisedButton primary>New Note</RaisedButton>
//     </Link>
//   );
// };

// export default NewNoteButton;
