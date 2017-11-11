import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import FontAwesome from "react-fontawesome";

const SaveButton = props => {
  let title = (props.noteTitle === '')
  return (
    <RaisedButton disabled={title} name="addNote" onClick={props.addNote} className="save">
      Save
      <FontAwesome className="save" name="floppy-o" size="lg" />
    </RaisedButton>
  );
};

export default SaveButton;
