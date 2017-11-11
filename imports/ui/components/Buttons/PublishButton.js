import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import FontAwesome from "react-fontawesome";

const PublishButton = props => {
  let title = props.noteTitle === ''
  return (
    <RaisedButton disabled={title} className="publish" onClick={props.publishNote}>
      Publish <FontAwesome className="share" name="share-square-o" size="lg" />
    </RaisedButton>
  );
};

export default PublishButton;
