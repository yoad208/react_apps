import React from 'react';
import {ACTIONS} from "../App";

function Todo({todo, dispatch}) {
    return (
        <div className="d-flex">
            <h1>{todo.todo}</h1>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>DELETE</button>
        </div>
    );
}

export default Todo;