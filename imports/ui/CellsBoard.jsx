import React from 'react';
import Cell from "./Cell";
const CellsBoard = ({board}) => {
    return (
        <div>
            {console.log(board.roomProps.colors)}
            {board.roomProps.colors.map((boardRow, indexRow) =>
                <div key={board._id+"row"+indexRow.toString()} className="boardRow">
                    {
                        boardRow.map((boardColor, indexCol) =>
                            <Cell
                                key={board._id+indexRow.toString()+indexCol.toString()}
                                startColor={boardColor}
                                board={board}
                                indexRow={indexRow}
                                indexCol={indexCol}
                            />
                        )
                    }
                </div>
            )}
        </div>
    );
};

export default CellsBoard;