import React, {useContext, useEffect, useState} from "react";
import '../../spaces.css'
import workSpaceLogo from "../../images/workSpaceLogo.png";
import ShowSpacesName from "./showSpacesName";
import useAxios from "../customHooks/useAxios";
import {dataProvider} from "../../App";


export default function CreateWorkSpace() {

    const {setSpaces, spaces, opacityBody, setOpacityBody} = useContext(dataProvider)
    const [name, setName] = useState('')
    const [dataSaved, setDataSaved] = useState({})
    const {error, response, request} = useAxios()


    useEffect(() => {
        setDataSaved({
            id: Date.now(),
            name: name,
            lists: []
        })
        request('GET', 'http://localhost:3001')
        return setSpaces(response)
    }, [name, response])


    const createWorkSpace = (e) => {
        e.preventDefault()
        if (name) {
            request('POST', 'http://localhost:3001', dataSaved)
        }
        setName('')
        setOpacityBody(opacityBody => !opacityBody)
    }

    return (
        <div className="create-workSpace" style={{maxWidth: '100%'}}>
            <button className="newSpace-btn" onClick={() => setOpacityBody(opacityBody => !opacityBody)}>New Space
            </button>
            {opacityBody
                ? <div className="workSpaceStyle">
                    <div className="create-workSpace-header">
                        <span>create work space</span>
                        <img width='150px' src={workSpaceLogo} alt="logo"/>
                    </div>
                    <form onSubmit={createWorkSpace}>
                        <input autoFocus={true} onChange={e => setName(e.target.value)} type="text"
                               placeholder="Insert workSpace name"/>
                        <button type="submit">click</button>
                    </form>

                </div>
                : error && <span className="workSpaceStyle"
                                 style={{padding: '25px 25px 0 25px', maxHeight: '50px', textAlign: 'center'}}>There is an error</span>}
            <div style={{padding: '0 2.5rem 0 .2rem'}}>
                {spaces.map(space => {
                    return <ShowSpacesName key={space.id} spaces={space}/>
                })}
            </div>
        </div>
    );
}
