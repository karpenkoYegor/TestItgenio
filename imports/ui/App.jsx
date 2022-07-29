import React, {useState} from 'react';
import {useTracker} from "meteor/react-meteor-data";
import {RoomsCollection} from "../api/RoomsCollection";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaintBoard from "./PaintBoard";
import MenuBoards from "./MenuBoards";
import { Meteor } from 'meteor/meteor';

export const App = () => {
    const boards = useTracker(() => {
        Meteor.subscribe('rooms');
        return RoomsCollection.find({}).fetch();
    });
    const [roomBoardId, setRoomBoardId] = useState();
    const removeBoard = ({ _id }) => {
        Meteor.call('room.remove', _id);
    }
    const changeBoard = ({ _id }) => {
        setRoomBoardId(boards.find(b=>b._id === _id)._id);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 col-xxl-4">
                    <MenuBoards boards={boards} changeBoard={changeBoard} removeBoard={removeBoard}/>
                </div>

                <div className="col-8 col-xxl-8">
                    {
                        roomBoardId !== undefined
                            ? <PaintBoard key={'PaintBoard'+roomBoardId} board={boards.find(b => b._id === roomBoardId)} />
                            : <div><h1>Выберите комнату</h1></div>
                    }
                </div>
            </div>
        </div>
    );
}

