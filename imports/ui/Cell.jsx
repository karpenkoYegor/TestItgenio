import React, {useState} from 'react';

const Cell = ({startColor, board, indexCol, indexRow}) => {
    const [isWhite, setIsWhite] = useState(startColor);
    const handleInverse = e => {
        e.preventDefault();
        setIsWhite(!isWhite);
        board.roomProps.colors[indexRow][indexCol] = !isWhite;
        Meteor.call('cell.invertColor', board._id, board);
    }

    return (
        <div
            className="cell"
            onClick={handleInverse}
            style={
                {
                    backgroundColor: isWhite ? "white" : "black"
                }
            }>
        </div>
    );
};

export default Cell;