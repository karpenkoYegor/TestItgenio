import { Meteor } from 'meteor/meteor';
import { RoomsCollection } from "./RoomsCollection";

Meteor.publish('rooms', function publishRooms(){
    return RoomsCollection.find({});
});

Meteor.publish('board', function publishBoard(_id){
    return RoomsCollection.find({_id});
});