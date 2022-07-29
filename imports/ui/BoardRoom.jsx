import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const BoardRoom = ({board, removeBoard, changeBoard}) => {
    return (
        <li className="list-group-item list-group-item-action " >
            <div className="container">
                <div className="row">
                    <div className="col-10" onClick={() => changeBoard(board)}>{board.roomProps.name}</div>
                    <div className="col-2">
                        <button className="deleteButton" onClick={() => removeBoard(board)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default BoardRoom;