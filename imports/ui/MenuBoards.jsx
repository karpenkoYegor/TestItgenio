import React from 'react';
import BoardForm from "./BoardForm";
import BoardRoom from "./BoardRoom";

const MenuBoards = ({boards, changeBoard, removeBoard}) => {
    return (
        <div className="menu">
            <BoardForm/>
            <ul className="list-group">
                {boards.map(board =>
                    <BoardRoom
                        key={board._id+board.roomProps.name}
                        board={board}
                        removeBoard={removeBoard}
                        changeBoard={changeBoard}
                    />
                )}
            </ul>
        </div>
    );
};

export default MenuBoards;