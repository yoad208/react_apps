import {useEffect, useLayoutEffect, useReducer, useState} from "react";
import ShowSpaces from "./showSpaces";
import CreateSpace from "./createSpace";
import useAxios from '../customHooks/useAxios'
import '../../spaces.css'
import Axios from "axios";

export const ACTIONS = {
    ADD_WORK_SPACE: 'add-work-space',
    DELETE_WORK_SPACE: 'delete-work-space',
    POST_DATA: 'post-data'
}

export const createWorkSpaceReducer = (workspace, action) => {
    switch (action.type) {
        case ACTIONS.ADD_WORK_SPACE:
            return [...workspace, newWorkSpace(action.payload.name)]
        case ACTIONS.POST_DATA:
            return Axios.post('http://localhost:3001', workspace).then(res => console.log(res))
        default:
            return workspace
    }
}

const newWorkSpace = (name) => {
    return {
        id: Date.now(),
        name: name,
        edit: false,
        lists: []
    }
}

export default function CreateWorkSpace({setActive, active}) {

    const [workSpace, dispatch] = useReducer(createWorkSpaceReducer, [])

    return (
        <div className="create-workSpace" style={{maxWidth: '15vw'}}>
            <button className="newSpace-btn" onClick={() => setActive(active => !active)}>New Space</button>
            {active ? <CreateSpace space={workSpace} dispatch={dispatch} setActive={setActive}/> : null}
            {workSpace.map(space => {
                return <ShowSpaces key={space.id} spaces={space} dispatch={dispatch}/>
            })}
        </div>
    );
}
