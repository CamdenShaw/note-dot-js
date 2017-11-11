import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import FontAwesome from "react-fontawesome";

const PublishButton = props => {
  console.log(this);
  return (
    <RaisedButton className="publish">
      Publish <FontAwesome className="share" name="share-square-o"  />
    </RaisedButton>
  );
};

export default PublishButton;
