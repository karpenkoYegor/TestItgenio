import { Meteor } from 'meteor/meteor';
import { RoomsCollection } from "../imports/api/RoomsCollection";
import '/imports/api/roomMethods';
import '/imports/api/roomPublication';

const insertRoom = roomProps => RoomsCollection.insert({roomProps})

Meteor.startup(() => {
    if (RoomsCollection.find().count() === 0){
        [
            {
                name: "Луна",
                colors: [
                    [true, true, true, true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true, true, true, true],
                ]
            }
        ].forEach(insertRoom)
    }
});
