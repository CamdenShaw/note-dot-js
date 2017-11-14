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
  "notes.addNote"(noteInput, titleInput, weekInput, topicInput) {
    if (!this.userId) {
      throw new Meteor.Error(
        "notes.addNote.not-authorized",
        "You are not allowed to add a Note."
      );
    }
    Notes.insert({
      title: titleInput,
      content: noteInput,
      owner: this.userId,
      createdOn: new Date(),
      week: weekInput,
      publish: false,
      topic: topicInput,
      upVote: 0,
      upVoteBool: [{userId: none, boolean: false}]
    });
  },
  "notes.publishNote"(noteInput, titleInput, weekInput, topicInput, noteId) {
    if (!this.userId) {
      throw new Meteor.Error(
        "notes.publishNote.not-authorized",
        "You are not allowed to publish a Note."
      );
    }
    Notes.update(
      { _id: noteId },
      {
        title: titleInput,
        content: noteInput,
        owner: this.userId,
        createdOn: new Date(),
        week: weekInput,
        publish: true,
        topic: topicInput,
        upVote: 0,
        upVoteBool: [{userId: this.userId, boolean: false}]
      },
      { upsert: true }
    );
  },
  "notes.removeNote"(note, owner) {
    console.log(owner)
    if (this.userId !== owner) {
      throw new Meteor.Error(
        "notes.removeNote.not-authorized",
        "You are not allowed to remove notes for other users."
      );
    }
    Notes.remove({ _id: note }, 1);
  },
  "notes.upVote"(count, noteId) {
    if (!this.userId){
      throw new Meteor.Error(
        "notes.upVote.note-authorized",
        "You are not allowed to up vote notes if you're not logged in."
      )
    }
    function hTMsCalc(hrs){
      ms = hrs * 60 * 60 * 1000
      return ms
    }
    Notes.update(
      {_id: noteId},
      { $set: {
        upVote: count
      }, $push: {
        upVoteBool: 
            {user: this.userId, boolean: true}
      }}),
    setTimeout(() => {Notes.update(
      {_id: noteId,
      upVoteBool: [{user: this.userId}]}, 
      { $set: {
        boolean: false
      }})}, hTMsCalc(24))
  }
});
