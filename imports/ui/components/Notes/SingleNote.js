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

// class NoteCard extends Component {
//   constructor(props) {
//     super(props);
//   }

//   clickity = className => {
//     console.log("this event", className);
//     // document.querySelector(".suck-it").addEventListener("click", () => {
//     //   //   e.preventDefault;
//     //   this.value;
//     //   console.log("this this", this);
//     // });
//   };

//   componenDidMount() {}

//   render() {
//     console.log("single note", this.props);
//     return (
//       <div onClick={() => this.clickity(this.props.item._id)}>
//         <Card>
//           <CardTitle
//             title={this.props.item.title}
//             subtitle={this.props.item.topic}
//           />
//           <CardText>{this.props.item.content}</CardText>
//         </Card>
//       </div>
//     );
//   }
// }
class NoteCard extends Component {
  constructor(props) {
    super(props);
  }

  clickity = className => {
    console.log("this event", className);
    // document.querySelector(".suck-it").addEventListener("click", () => {
    //   e.preventDefault;
    //   this.value;
    //   console.log("this this", this);
    // });
  };

  componentDidMount() {
    document.querySelector(
      `.ct-${this.props.item.title.replace(/\s/g, "-")}`
    ).innerHTML = this.props.item.content;
  }

  render() {
    title = `${("render", this.props.item.title)}`;
    return (
      <div onClick={() => this.clickity(this.props.item._id)}>
        <Card className="card">
          <CardTitle title={title} subtitle={this.props.item.topic} />
          <CardText className={`ct-${title.replace(/\s/g, "-")} card-text`} />
        </Card>
      </div>
    );
  }
}

export default NoteCard;
