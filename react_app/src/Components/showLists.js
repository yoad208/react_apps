import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faEdit, faSave, faEyeDropper} from "@fortawesome/free-solid-svg-icons";
import {ACTIONS} from "./createList";
import React, {useRef, useState} from "react";
import CreateTask from "./createTask";
import ColorPicker from "./colorPicker";


export default function ShowLists({list, dispatch}) {

    const input = useRef()
    const [value, setValue] = useState(list.status)
    const [flag, setFlag] = useState(false)
    const [colorFlag, setColorFlag] = useState(false)
    const [color, setColor] = useState('#fff')


    const editList = () => {
        dispatch({type: ACTIONS.EDIT_LIST, payload: {status: value, id: list.id}})
        setFlag(!flag)
    }

    const updateList = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.UPDATE_LIST, payload: {status: value, id: list.id}})
        list.edit = false
        setFlag(!flag)
    }

    const deleteList = () => {
        dispatch({type: ACTIONS.DELETE_LIST, payload: {id: list.id}})
    }

    const getColorHex = () => {
        setColorFlag(!colorFlag)
    }

    const listStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'calc(1000px / 3.5)',
        backgroundColor: 'rgba(0,0,0,.1)',
        padding: '12px 6px',
        borderTop: (color === '#fff' ? '3px solid #9D9D9D': `3px solid ${color.hex}`),
        borderRadius: '6px'
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={listStyle}>
                {list.edit && flag
                    ? <form onSubmit={updateList}>
                        <input style={{backgroundColor: "transparent", border: 'none', outline: 'none'}} ref={input}
                               type="text" placeholder="Change status" onChange={() => setValue(input.current.value)}/>
                    </form>
                    : list.status}
                <div style={{display: 'flex', gap: '1rem'}}>
                    <FontAwesomeIcon style={{color: '#909b9b'}}
                                     icon={faEyeDropper}
                                     onClick={getColorHex}>color</FontAwesomeIcon>
                    <FontAwesomeIcon style={{color: '#9f0404'}}
                                     onClick={deleteList}
                                     icon={faTrashCan}/>
                    {!flag
                        ? <FontAwesomeIcon style={{color: 'rgba(0,0,0,.5)'}} onClick={editList} icon={faEdit}/>
                        : <FontAwesomeIcon style={{color: '#6b6be5'}} onClick={updateList} icon={faSave}/>}
                </div>
            </div>
            {colorFlag ? <ColorPicker colorValue={setColor}/> : ''}
            <CreateTask status={list.status}/>
        </div>
    );
}

