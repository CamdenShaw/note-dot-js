import { Mongo } from "meteor/mongo";

export const Notes = new Mongo.Collection("notes");

if (Meteor.isServer) {
  Meteor.publish("notes", function notesPublication() {
    return Notes.find({ owner: this.userId });
  });
}

Meteor.methods({
  "notes.removeNote"(notes) {
    if (notes.owner !== this.userId) {
      throw new Meteor.Error(
        "notes.removeNote.not-authorized",
        "You are not allowed to remove other users notes."
      );
    }
    Notes.remove(notes._id);
  },
  "notes.addNote"(noteInput) {
    if (!this.userId) {
      throw new Meteor.Error(
        "notes.addNote.not-authorized",
        "You are not allowed to remove completed to-dos for other users."
      );
    }
    Notes.insert({
      title: noteInput,
      description: "",
      owner: this.userId
    });
  }
});
