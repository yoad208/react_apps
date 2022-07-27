import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import React, {useReducer, useRef, useState} from "react";
import ShowLists from "./showLists";


export const ACTIONS = {
    CREATE_LIST: 'create-list',
    DELETE_LIST: 'delete-list',
    EDIT_LIST: 'edit-list',
    UPDATE_LIST: 'update-list'
}

export const reducer = (lists, action) => {
    switch (action.type) {
        case ACTIONS.CREATE_LIST:
            return [...lists, newList(action.payload.status)]

        case ACTIONS.DELETE_LIST:
            return lists.filter(list => list.id !== action.payload.id)

        case ACTIONS.EDIT_LIST:
            return lists.map(list => {
                if (list.id === action.payload.id) {
                    return {...list, status: action.payload.status, edit: true}
                }
                return list
            })

        case ACTIONS.UPDATE_LIST:
            return lists.map(list => {
                if (list.id === action.payload.id) {
                    return {...list, status: action.payload.status}
                }
                return list
            })

        default:
            return lists
    }
}

const newList = (status) => {
    return {id: Date.now(), status: status, edit: false}
}

export default function CreateList(props) {

    const statusList = useRef()
    const [flag, setFlag] = useState(false);
    const [lists, dispatch] = useReducer(reducer, [])

    const formStyle = {
        display: 'flex',
        gap: '.2rem',
        float: 'right',
        marginRight: '6rem',
        padding: '10px 6px',
        border: '3px solid rgba(0,0,0,.3)',
        borderRadius: '90px',
        backgroundColor: 'rgba(0,0,0,.1)',
        maxWidth: 'calc(1000px / 4)'

    }

    const Flag = () => {
        return setFlag(!flag)
    }

    const addList = (e) => {
        e.preventDefault();
        if (statusList.current.value) {
            dispatch({type: ACTIONS.CREATE_LIST, payload: {status: statusList.current.value}})
        }
        Flag()
    }

    return (
        <>
            <form style={formStyle} onSubmit={addList}>
                {!flag
                    ? <><span
                        style={{
                            marginRight: '2rem',
                            fontSize: 'small'
                        }}>Add new list</span>
                        <FontAwesomeIcon onClick={Flag} icon={faAdd}/> </>
                    : <>
                        <input
                            style={{
                                backgroundColor: "transparent",
                                border: 'none',
                                outline: 'none'
                            }}
                            ref={statusList} type="text" placeholder="Status list"/>
                        <button
                            style={{
                                border: "none",
                                backgroundColor: "transparent"
                            }}
                            type="submit"><FontAwesomeIcon
                            icon={faAdd}/></button>
                    </>
                }
            </form>
            <div style={{display: "flex", gap: '1.5rem', margin: '3.5rem 6rem', flexWrap: 'wrap'}}>
                {lists.map(list => {
                    return <ShowLists key={list.id} list={list} dispatch={dispatch}/>
                })}
            </div>
        </>
    )
}