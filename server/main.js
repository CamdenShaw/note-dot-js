<<<<<<< HEAD
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log(MongoInternals.defaultRemoteCollectionDriver().mongo._oplogHandle._oplogUrl)
});
=======
import "../imports/startup/server";
>>>>>>> fa16a965baf139dcac36b7f203de80a0bc82bc3b
