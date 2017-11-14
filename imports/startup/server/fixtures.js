import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import { Notes } from "../../../imports/api/notes";

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

  if (Notes.find().count() === 0) {
    Notes.insert({
      title: "my new note",
      topic: "javascript",
      content: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><script type='text/javascript'>alert(poison)</script>",
      week: 'one',
      publish: true,
      createdOn: new Date(),
      owner: "none",
      userName: "bobby-joe",
      _id: "0",
      upVote: 2000,
      upVoteBool: [{userId: "6", boolean: false}]
    });
  }
});
