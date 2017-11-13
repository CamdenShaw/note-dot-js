import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

export const Users = new Mongo.Collection("student-emails")

if(Meteor.isServer) {
    Meteor.publish("stduent-emails", function usersPublication(userIds) {
        return Meteor.users.find({}).map(function(user){
            user.profile.email
        });
    })
}
