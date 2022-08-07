import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useReducer, useRef, useState} from "react";
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

export default function CreateList() {

    const statusList = useRef()
    const [flag, setFlag] = useState(false)
    const [notEmpty, setNotEmpty] = useState(false)
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
        top: '14%',
        left: '23%'
    }

    useEffect(() => {
        if (lists.length > 0) {
            setNotEmpty(true)
        } else {
            setNotEmpty(false)
        }
    }, [lists])

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
                        padding: '2px 5px 2px 5px',
                        position: "absolute",
                        top: '50%',
                        left: '23%'
                    }}>
                        <FontAwesomeIcon style={{textAlign: "center"}} icon={faAdd}/></div>
                    : <div style={{cursor: 'pointer', marginTop: '.3rem'}}>
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
            <div style={{
                margin: '2rem .5rem 0 1rem',
                flexWrap: 'wrap',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                borderRadius: '12px',
                maxWidth: '53vw',
                height: '37vw'
            }}>
            <div style={{height: '8vh', width: '53vw', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', backgroundColor: 'rgba(24, 165, 227, 0.73)', marginBottom: '6px'}}/>


                {!notEmpty ?<div style={{
                    display: 'flex',
                    marginLeft: '150px',
                    flexDirection: 'column',
                    gap: '3rem'
                }}>
                    <img style={{width: "400px"}}
                         src="https://app-cdn.clickup.com/assets/images/illustrations/no-results-me-mode.svg" alt=""/>
                    <span style={{paddingLeft: '50px'}}>You don't have any lists assigned to you</span>
                </div> : null}


                <div style={{
                    display: "flex",
                    gap: '1rem',
                    marginLeft: '.3rem',
                    overflow: "auto",
                    overflowY: "hidden",
                    overflowX: "-moz-hidden-unscrollable",
                    maxWidth: '100%',
                    height: '33vw',
                }}>
                    {lists.map(list => {
                        return <ShowLists key={list.id} list={list} dispatch={dispatch}/>
                    })}
                </div>
            </div>
        </>
    )
}