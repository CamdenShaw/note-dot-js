import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

// import { Notes } from "../../../imports/api/notes";

Meteor.startup(() => {
  let user = {};

  if (Meteor.users.find().count() === 0) {
    user = Accounts.createUser({
      email: "davidhilscher@gmail.com",
      password: "password",
      profile: {
        fullname: 'David Hilscher'
      }
    });
  } else {
    user = `${Meteor.users.findOne()._id}`;
  }
});
