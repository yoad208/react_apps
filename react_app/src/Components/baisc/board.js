import React, {useState} from 'react';
import Navigation from "./navigation";
import CreateList from "../createList";

function Board(props) {

    const [newList, setNewList] = useState([])

    return (
        <div className="board">
            <Navigation/>
            <div
                className="body"
                style={{
                    borderTop: '1px solid black',
                    display: 'flex',
                    padding: '3rem 0 0 0',
                    flexWrap: 'wrap'
                }}>
                {newList.map(list => {
                    return list
                })}
                <CreateList lists={setNewList}/>
            </div>
        </div>
    )
        ;
}

export default Board;