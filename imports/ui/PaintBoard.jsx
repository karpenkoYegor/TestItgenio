import React from 'react';
import CellsBoard from "./CellsBoard";

const PaintBoard = ({board}) => {
    return (
        <div className="paintBoard">
            {board.roomProps.colors}
            <div className="board">
                <CellsBoard key={board._id} board={board}/>
            </div>
        </div>
    );
};

export default PaintBoard;