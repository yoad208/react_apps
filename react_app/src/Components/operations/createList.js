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
        border: flag ? '2px solid rgba(0,0,0,.3)' : null,
        borderRadius: flag ? '180px' : null,
        maxWidth: 'calc(1000px / 4)',
        position: "absolute",
        bottom: '8%',
        right: 0
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
                    ? <div onClick={Flag} style={{
                        fontSize: 'large',
                        cursor: 'pointer',
                        border: '2px solid rgba(0,0,0,.3)',
                        borderRadius: '180px',
                        padding: '2.5px 5px 2.5px 5px',
                        position: "absolute",
                        bottom: '8%',
                        right: '5%'
                    }}>
                        <FontAwesomeIcon style={{textAlign: "center"}} icon={faAdd}/> </div>
                    : <div style={{cursor: 'pointer'}}>
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
                            type="submit"><FontAwesomeIcon style={{cursor: 'pointer'}} icon={faAdd}/>
                        </button>
                    </div>
                }
            </form>
            <div style={{display: "flex", gap: '2rem', margin: '3.5rem 3.5rem 0 2rem ', flexWrap: 'wrap'}}>
                {lists.map(list => {
                    return <ShowLists key={list.id} list={list} dispatch={dispatch}/>
                })}
            </div>
        </>
    )
}