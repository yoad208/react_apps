import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import React, {useReducer, useRef, useState} from "react";
import ShowLists from "./showLists";


export const ACTIONS = {
    CREATE_LIST: 'create-list',
    DELETE_LIST: 'delete-list',
    EDIT_LIST: 'edit-list'
}

export const reducer = (lists, action) => {
    switch (action.type) {
        case ACTIONS.CREATE_LIST:
            return [...lists, newList(action.payload.status)]
        case ACTIONS.DELETE_LIST:
            return lists.filter(list => list.id !== action.payload.id)
        case ACTIONS.EDIT_LIST:
            return lists
        default:
            return lists
    }
}

const newList = (status) => {
    return {id: Date.now(), status: status}
}

export default function CreateList(props) {

    const statusList = useRef()
    const [flag, setFlag] = useState(false);
    const [lists, dispatch] = useReducer(reducer, [])

    const formStyle = {
        display: 'flex',
        justifyContent: 'right',
        marginRight: '6rem'
    }

    const Flag = () => {
        return setFlag(!flag)
    }

    const addList = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.CREATE_LIST, payload: {status: statusList.current.value}})
        Flag()
    }

    return (
        <>
            <form style={formStyle} onSubmit={addList}>
                {!flag
                    ? <><span style={{marginRight: '2rem'}}>Add new list</span> <FontAwesomeIcon onClick={Flag}
                                                                                                 icon={faAdd}/> </>
                    : <>
                        <input ref={statusList} type="text" placeholder="Status list"/>
                        <button type="submit">Create</button>
                    </>
                }
            </form>
            <div style={{display: "flex", gap: '1.5rem', margin: '2rem 6rem', flexWrap: 'wrap'}}>
                {lists.map(list => {
                    return <ShowLists key={list.id} list={list} dispatch={dispatch}/>
                })}
            </div>
        </>
    )
}