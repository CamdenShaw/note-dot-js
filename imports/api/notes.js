import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Notes = new Mongo.Collection("notes");

if (Meteor.isServer) {
  Meteor.publish("notes", function notesPublication() {
    return Notes.find();
  });
}
// if (Meteor.isServer) {
//   Meteor.publish("notes", function notesPublication() {
//     return Notes.find({ owner: this.userId });
//   });
// }

Meteor.methods({
  // "notes.removeNote"(notes) {
  //   if (notes.owner !== this.userId) {
  //     throw new Meteor.Error(
  //       "notes.removeNote.not-authorized",
  //       "You are not allowed to remove other users notes."
  //     );
  //   }
  //   Notes.remove(notes._id);
  // },
  "notes.addNote"(noteInput) {
    if (!this.userId) {
      throw new Meteor.Error(
        "notes.addNote.not-authorized",
        "You are not allowed to add a Note."
      );
    }
    Notes.insert({
      title: "",
      noteText: noteInput,
      owner: this.userId,
      createdOn: new Date(),
      week: "",
      publish: false,
      topic: ""
    });
  },
  "notes.publishNote"(noteInput) {
    if (!this.userId) {
      throw new Meteor.Error(
        "notes.publishNote.not-authorized",
        "You are not allowed to publish a Note."
      );
    }
    Notes.update(
      { _id: Notes._id },
      {
        title: "",
        content: noteInput,
        owner: this.userId,
        createdOn: new Date(),
        week: "",
        publish: true,
        topic: ""
      },
      { upsert: true }
    );
  },
  "notes.removeNote"(note) {
    console.log("meteor delete method start", note);
    if (!this.userId) {
      throw new Meteor.Error(
        "notes.removeNote.not-authorized",
        "You are not allowed to remove notes for other users."
      );
    }
    console.log("meteor delete method", note);
    Notes.remove({ _id: note }, 1);
  }
});
