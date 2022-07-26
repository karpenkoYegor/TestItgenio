import React, {useState} from 'react';
import {useTracker} from "meteor/react-meteor-data";
import {RoomsCollection} from "../api/RoomsCollection";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaintBoard from "../ui/PaintBoard";
import MenuBoards from "../ui/MenuBoards";
import { Meteor } from 'meteor/meteor';
const removeBoard = ({ _id }) => {
    Meteor.call('room.remove', _id);
}

export const App = () => {


    const boards = useTracker(() => {
        Meteor.subscribe('rooms');
        const boards = RoomsCollection.find({}).fetch();
        return boards;
    });
    const [roomBoardId, setRoomBoardId] = useState();
    const changeBoard = ({ _id }) => {
        setRoomBoardId(boards.find(b=>b._id === _id)._id);
    };

    return (
        <div>
            <div className="paint">
                <React.StrictMode>
                    <MenuBoards boards={boards} changeBoard={changeBoard} removeBoard={removeBoard}/>
                    {
                        roomBoardId !== undefined
                            ? <PaintBoard key={'PaintBoard'+roomBoardId} board={boards.find(b => b._id === roomBoardId)} />
                            : <div>...Loading</div>
                    }
                </React.StrictMode>
            </div>
        </div>
    );
}

