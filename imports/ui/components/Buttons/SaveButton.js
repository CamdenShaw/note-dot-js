import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import FontAwesome from "react-fontawesome";

const SaveButton = props => {
  return (
    <RaisedButton name="addNote" onClick={props.addNote} className="save">
      Save <FontAwesome className="save" name="floppy-o" />
    </RaisedButton>
  );
};

export default SaveButton;
