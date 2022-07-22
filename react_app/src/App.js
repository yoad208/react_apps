import React, {useReducer, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Components/todo";
import {findAllByDisplayValue} from "@testing-library/react";
import Login from "./Components/basic/login";

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    DELETE_TODO: 'delete-todo',
}

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.todo)]
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }

}

const newTodo = (todo) => {
    return {
        id: Date.now(),
        todo: todo,
        complete: 0
    }
}

const App = () => {

    const [todos, dispatch] = useReducer(reducer, [])
    const [todo, setTodo] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: {todo} })
        setTodo('')
    }

    return (
        <div className="App">
            <Login/>
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>*/}
            {/*</form>*/}
            {/*{todos.map(todo => {*/}
            {/*    return <Todo key={todo.id}  todo={todo} dispatch={dispatch}/>*/}
            {/*})}*/}
        </div>
    )
}

export default App;
