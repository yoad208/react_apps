import React from 'react';
import Navigation from "./navigation";
import CreateList from "../createList";

function Board(props) {
    return (
        <div className="board">
            <Navigation/>
            <div className="body" style={{borderTop: '1px solid black'}}>
                <CreateList/>
            </div>
        </div>
    );
}

export default Board;