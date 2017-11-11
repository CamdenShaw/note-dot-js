import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import FontAwesome from "react-fontawesome";

const PublishButton = props => {
  return (
    <RaisedButton className="publish" onClick={props.publishNote}>
      Publish <FontAwesome className="share" name="share-square-o"  />
    </RaisedButton>
  );
};

export default PublishButton;
