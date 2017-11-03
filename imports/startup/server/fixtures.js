import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  let user = {};

  // if (Meteor.users.find().count() === 0) {
  //   user = Accounts.createUser({
  //     email: "davidhilscher@gmail.com",
  //     password: "password"
  //   });
  // } else {
  //   user = `${Meteor.users.findOne()._id}`;
  // }
});
