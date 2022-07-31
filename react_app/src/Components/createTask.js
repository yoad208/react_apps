import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useReducer, useRef, useState} from "react";
import ShowTodos from "./showTodos";


export const ACTIONS = {
    ADD_TODO: 'add-todo',
    DELETE_TODO: 'delete-todo',
    EDIT_TODO: 'edit-todo',
    UPDATE_TODO: 'update-todo'
}

export const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.todo, action.payload.complete)]

        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)

        case ACTIONS.EDIT_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, todo: action.payload.todo, edit: true}
                }
                return todo
            })

        case ACTIONS.UPDATE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, todo: action.payload.todo}
                }
                return todo
            })
        default:
            return todos
    }
}

const newTodo = (todo, complete) => {
    return {
        id: Date.now(),
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
        todo: todo,
        complete: complete,
        edit: false
    }
}

export default function CreateTask({status}) {

    const todoInput = useRef()
    const [flag, setFlag] = useState(false)
    const [todos, dispatch] = useReducer(reducer, [])

    const addTodo = (e) => {
        e.preventDefault()
        if (todoInput.current.value) {
            dispatch({
                type: ACTIONS.ADD_TODO, payload: {
                    todo: todoInput.current.value,
                    complete: status === 'COMPLETE'
                }
            })
        }
        setFlag(!flag)
    }

    useEffect(() => {
        console.log(todos)
    }, [todos])

    const createTaskStyle = {
        display: 'flex',
        marginTop: '.5rem',
        alignItems: 'center',
        gap: '.5rem',
        textAlign: 'left',
    }

    return (
        <>
            {todos.map(todo => {
                return <ShowTodos key={todo.id} todo={todo} dispatch={dispatch}/>
            })}

            <div style={createTaskStyle}>
                {!flag
                    ? <div className="createTask" onClick={() => setFlag(!flag)}>
                        <span>NEW TASK</span>
                        <FontAwesomeIcon icon={faAdd}/>
                    </div>
                    : <>
                        <form style={{display: 'flex', gap: '1rem'}} onSubmit={addTodo}>
                            <input style={{resize: 'none'}} ref={todoInput} placeholder="Add todo"/>
                            <FontAwesomeIcon onClick={addTodo} icon={faAdd}/>
                        </form>
                    </>
                }
            </div>

        </>
    );
}
