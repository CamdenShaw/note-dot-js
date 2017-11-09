import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import FontAwesome from "react-fontawesome";

const SaveButton = props => {
  console.log(this);
  return (
    <RaisedButton name="addNote" onClick={this.addNote} className="save">
      Save
      <FontAwesome className="save" name="floppy-o" size="lg" />
    </RaisedButton>
  );
};

export default SaveButton;
