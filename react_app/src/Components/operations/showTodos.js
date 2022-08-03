import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faSave, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {ACTIONS} from "./createTask";
import React, {useRef, useState} from "react";


export default function ShowTodos({todo, dispatch}) {

    const input = useRef()
    const [value, setValue] = useState(todo.todo)
    const [flag, setFlag] = useState(false)


    const editList = () => {
        dispatch({type: ACTIONS.EDIT_TODO, payload: {todo: value, id: todo.id}})
        setFlag(!flag)
    }

    const updateList = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.UPDATE_TODO, payload: {todo: value, id: todo.id}})
        todo.edit = false
        setFlag(!flag)
    }

    const deleteList = () => {
        dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '6px',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px',
            maxWidth: 'calc(1000px / 3)',
            wordBreak: "break-all",
            padding: '12px 5px',
            marginTop: '.3rem',
        }}>

            {todo.edit && flag
                ? <form onSubmit={updateList}>
                    <input style={{backgroundColor: "transparent", border: 'none', outline: 'none'}} ref={input}
                           type="text" placeholder="Edit todo" onChange={() => setValue(input.current.value)}/>
                </form>
                : todo.todo
            }
            <div style={{display: 'flex', justifyContent: 'space-between', gap: '1rem', marginTop: '1rem'}}>
                {todo.time}
                <div style={{display: 'flex', gap: '12px'}}>
                    <FontAwesomeIcon style={{color: '#9f0404'}} onClick={deleteList} icon={faTrashCan}/>
                    {!todo.complete ? !flag
                            ? <FontAwesomeIcon style={{color: 'rgba(0,0,0,.5)'}} onClick={editList} icon={faEdit}/>
                            : <FontAwesomeIcon style={{color: '#6b6be5'}} onClick={updateList} icon={faSave}/>
                        : ''}
                </div>
            </div>
        </div>
    );
}