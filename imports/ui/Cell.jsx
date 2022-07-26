import React, {useState} from 'react';
import { Meteor } from 'meteor/meteor';
import {useTracker} from "meteor/react-meteor-data";
const Cell = ({startColor, board, indexCol, indexRow}) => {

    let color = useTracker(() => {
        return startColor;
    });

    const handleInverse = e => {
        e.preventDefault();
        color = !color;
        board.roomProps.colors[indexRow][indexCol] = color;
        Meteor.call('cell.invertColor', board._id, board);
    }

    return (
        <div
            className="cell"
            onClick={handleInverse}
            style={
                {
                    backgroundColor: color ? "white" : "black"
                }
            }>
        </div>
    );
};

export default Cell;