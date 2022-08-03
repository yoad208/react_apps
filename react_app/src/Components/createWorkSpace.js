import {useEffect, useReducer} from "react";
import ShowSpaces from "./showSpaces";
import CreateSpace from "./createSpace";

export const ACTIONS = {
    ADD_WORK_SPACE: 'add-work-space',
    DELETE_WORK_SPACE: 'delete-work-space'
}

export const createWorkSpaceReducer = (workspace, action) => {
    switch (action.type) {
        case ACTIONS.ADD_WORK_SPACE:
            return [...workspace, newWorkSpace(action.payload.name)]
        default:
            return workspace
    }
}

const newWorkSpace = (name) => {
    return {
        id: Date.now(),
        name: name
    }
}

export default function CreateWorkSpace({setActive, active}) {

    const [workSpace, dispatch] = useReducer(createWorkSpaceReducer, [])

    useEffect(() => {
        console.log(workSpace)
    }, [workSpace])


    return (
        <div style={{maxWidth: '15vw'}}>
            <button style={{
                width: '15vw',
                border: 'none',
                fontSize: 'large',
                textTransform: 'uppercase',
                outline: 'none',
                color: 'rgba(0,0,0,.2)',
                backgroundColor: 'rgba(0,0,0,.1)',
            }} onClick={() => setActive(active => !active)}>New Space
            </button>
            {active ? <CreateSpace dispatch={dispatch} setActive={setActive}/> : null}
            {workSpace.map(space => {
                return <ShowSpaces key={space.id} spaces={space} dispatch={dispatch}/>
            })}
        </div>
    );
}
