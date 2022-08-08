import React, {useEffect, useRef} from 'react';
import workSpaceLogo from "../../images/workSpaceLogo.png";
import {ACTIONS} from "./createWorkSpace";
import '../../spaces.css'
import Axios from "axios";

export default function CreateSpace({dispatch, setActive, space}) {

    const workSpaceName = useRef()

    useEffect(() => {
        console.log(space)
    },[space])

    const createWorkSpace = (e) => {
        e.preventDefault()
        if (workSpaceName.current.value) {
            dispatch({type: ACTIONS.ADD_WORK_SPACE, payload: {name: workSpaceName.current.value}})
            // Axios.post('http://localhost:3001', space).then(res => console.log(res))
        }
        workSpaceName.current.value = ''
        setActive(active => !active)
    }


    return (
        <div className="workSpaceStyle">
            <div className="create-workSpace-header">
                <span>create work space</span>
                <img width='150px' src={workSpaceLogo} alt="logo"/>
            </div>
            <form onSubmit={createWorkSpace}>
                <input ref={workSpaceName} type="text" placeholder="Insert workSpace name"/>
                <button onSubmit={createWorkSpace}>click</button>
            </form>
        </div>
    );
}

