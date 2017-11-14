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
import Dialog from "material-ui/Dialog";
import Note from "../../containers/notes/notes";
import FlatButton from "material-ui/FlatButton";
import PropTypes from "prop-types";

import './styles.css'

class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      random: ''
    };
  }

  handleOpen = content => {
    this.setState({ noteId: content });
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.open
    });
  };

  setFilters() {
    if(this.props.filters.filterType !== null){
      let {filters, filterType} = this.props.filters
      if (`${filters}` !== `${this.props.item[filterType]}`) {
        document.querySelectorAll(`.${filters}`).forEach(card => {
          card.style = "display: block"
        })
      } else {
        document.querySelectorAll(`.card`).forEach(card => {
          card.style = "display: none"
        })
      }
      if (filters === null) {
        document.querySelectorAll(".card").forEach(card => {
          card.style = "display: block"
        })
      }
    }
  }

  componentDidUpdate() {
    this.setFilters()
    setTimeout(() => {
      document.querySelector(
        `.ct-${this.props.item.title.replace(/\s/g, "-")}`
      ).innerHTML = this.props.item.content;
    }, 1)

  }

  componentDidMount() {
    this.setFilters()
    setTimeout(() => {
      document.querySelector(
        `.ct-${this.props.item.title.replace(/\s/g, "-")}`
      ).innerHTML = this.props.item.content;
    }, 1)
  }

  render() {
    console.log(this.props)
    actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];
    title = `${("render", this.props.item.title)}`;
    return (
      <div className={`card ${this.props.item.topic} ${this.props.item.week} ${this.props.item.userName}`}>
        <Card
          className="card2"
          onClick={() => {
            this.setState({ noteContent: this.props.item.content });
            this.handleOpen(this.props.item.content);
          }}
        >
          <CardTitle title={title} subtitle={this.props.item.topic} />
          <CardText className={`ct-${this.props.item.title.replace(/\s/g, "-")} card-text`} />
        </Card>
        <Dialog
          actions={actions}
          modal={true}
          open={this.state.open}
          bodyStyle={{minWidth: 680}}
          overlayStyle={{minWidth: '100%'}}
          contentStyle={{width: 'auto', height: '90%'}}
        >
          <Note oldNote={this.props.item} />
        </Dialog>
      </div>
    );
  }
}

NoteCard.defaultProps = {
  editorInput: ""
};

NoteCard.PropTypes = {
  editorInput: PropTypes.string
};

export default NoteCard;
