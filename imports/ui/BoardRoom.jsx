import React from 'react';

const BoardRoom = ({board, removeBoard, changeBoard}) => {
    return (
        <li>
            <p onClick={() => changeBoard(board)}>
                {board.roomProps.name}
            </p>
            <button onClick={() => removeBoard(board)}>Удалить</button>
        </li>
    );
};

export default BoardRoom;