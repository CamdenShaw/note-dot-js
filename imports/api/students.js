import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

Meteor.publish("allUsers", function() {
  return Meteor.users.find(
    {},
    {
      // specific fields to return
      "profile.email": 1,
      "profile.name": 1
    }
  );
});
