import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import FontAwesome from "react-fontawesome";
import "./styles.css";

const DeleteButton = props => {
  return (
    <RaisedButton
      name="removeNote"
      onClick={props.removeNote}
      className="delete"
    >
      Delete
      <FontAwesome className="delete" name="trash-o" size="lg" />
    </RaisedButton>
  );
};

export default DeleteButton;
