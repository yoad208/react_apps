import React, {useRef} from 'react';
import workSpaceLogo from "../../images/workSpaceLogo.png";
import {ACTIONS} from "./createWorkSpace";

export default function CreateSpace({dispatch, setActive}) {

    const workSpaceName = useRef()

    const workSpaceStyle = {
        width: '30vw',
        height: '30vw',
        backgroundColor: 'lightgrey',
        position: 'absolute',
        left: '40%',
        top: '20%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    }

    const createWorkSpace = (e) => {
        e.preventDefault()
        if (workSpaceName.current.value) {
            dispatch({type: ACTIONS.ADD_WORK_SPACE, payload: {name: workSpaceName.current.value}})
        }
        workSpaceName.current.value = ''
        setActive(active => !active)
    }


    return (
        <div style={workSpaceStyle}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexDirection: 'column', height: '15rem', maxHeight: '15erm'}}>
                <span>create work space</span>
                <img width='150px' src={workSpaceLogo} alt="logo"/>
            </div>
            <form style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem'}} onSubmit={createWorkSpace}>
                <input ref={workSpaceName} type="text" placeholder="Insert workSpace name" style={{
                    outline: 'none',
                    border: 'none',
                    backgroundColor: 'transparent',
                    borderBottom: '1px solid',
                    width: '70%',
                    maxWidth: '70%'
                }}/>
                <button onSubmit={createWorkSpace}>click</button>
            </form>
        </div>
    );
}

