import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

export const Users = new Mongo.Collection("student-emails")

if(Meteor.isServer) {
    Meteor.publish("students-emails", function usersPublication() {
        // if(!this.userId) {
        //     this.ready();
        //     return
        // }
        return Meteor.users.find({}).fetch()
    })
}