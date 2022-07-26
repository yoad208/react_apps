import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import NewList from "./newList";

function CreateList({lists}) {

    const status = useRef()
    const [isClicked, setIsClicked] = useState(false)
    const [statusList, setStatusList] = useState('')
    const [newList, setNewList] = useState([])


    const createInputField = () => {
        return setIsClicked(true)
    }

    const onSave = () => {
        console.log(statusList)
        setIsClicked(false)
        setNewList([...newList, <NewList name={statusList}/>])
        return lists([...newList, {id: Date.now(), listName: <NewList name={statusList}/>}])
    }

    return (
        <div className="createList"
             style={{
                 maxWidth: '25%',
                 textAlign: 'center',
                 marginLeft: '18px',
                 marginRight: '8px',
             }}>
            <div className="newList"
                 style={{
                     borderTop: '3px solid rgba(0,0,0,.3) ',
                     padding: '12px',
                     backgroundColor: 'rgba(0,0,0,.1)',
                     cursor: 'pointer'
                 }}>
                {!isClicked
                    ? <>
                        <span style={{paddingRight: '5px'}}>Add new list</span>
                        <FontAwesomeIcon onClick={createInputField} icon={faAdd}/>
                    </>
                    : <> <input
                        onChange={() => setStatusList(status.current.value)}
                        ref={status} type="text"
                        placeholder="Status list"
                        style={{
                            padding: '12px',
                            marginRight: '5px',
                            border: 'none',
                            backgroundColor: "rgba(0,0,0,.1)",
                        }}
                    />
                        <span onClick={onSave}> Save </span>
                    </>
                }
            </div>
        </div>
    );
}

export default CreateList;