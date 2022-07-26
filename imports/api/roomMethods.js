import { Meteor } from 'meteor/meteor';
import {check} from "meteor/check";
import {RoomsCollection} from "./RoomsCollection";

Meteor.methods({
    'rooms.insert'(text) {
        check(text, String);

        RoomsCollection.insert({
            roomProps: {
                name: text.trim(),
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
        });
    },

    'room.remove'(roomId) {
        check(roomId, String);

        RoomsCollection.remove(roomId);
    },

    'cell.invertColor'(roomId, board) {
        check(roomId, String);

        RoomsCollection.update(roomId, board);
    }
})