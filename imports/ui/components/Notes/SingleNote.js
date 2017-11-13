import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from 'material-ui/Dialog'
import Note from '../../containers/notes/notes'
import FlatButton from 'material-ui/FlatButton'
import PropTypes from "prop-types";

class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleOpen = (content) => {
    this.setState({ noteId: content })
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.open
    })
  }

  componentDidMount() {
    document.querySelector(
      `.ct-${this.props.item.title.replace(/\s/g, "-")}`
    ).innerHTML = this.props.item.content;
  }

  render() {
    actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />
    ]
    title = `${("render", this.props.item.title)}`;
    return (
      <div className="card" >
        <Card  className="card2" onClick={() => {
          this.setState({noteContent: this.props.item.content})
          this.handleOpen(this.props.item.content)
          }} >
          <CardTitle title={title} subtitle={this.props.item.topic} />
          <CardText className={`ct-${title.replace(/\s/g, "-")} card-text`} />
        </Card>
        <Dialog
          actions={actions}
          modal={true}
          open={this.state.open}
          >
          <Note oldNote={this.props.item} />
        </Dialog>
      </div>
    );
  }
}

NoteCard.defaultProps = {
  editorInput: ''
}

NoteCard.PropTypes = {
  editorInput: PropTypes.string
}

export default NoteCard;