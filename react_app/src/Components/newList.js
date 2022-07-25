import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import Tasks from "./tasks";

function NewList(props) {

    const [newTask, setNewTask] = useState([])

    const createNewTask = () => {
        return setNewTask([...newTask, <Tasks/>])
    }

    return (
        <div className="list-container">
            <div
                className="list-header"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: 'rgba(0,0,0,.1)',
                    borderTop: (props.name === 'TO-DO' ? '3px solid #f00' : props.name === 'IN-PROGRESS' ? '3px solid gold' : '3px solid #0f0'),
                    width: 'calc(1000px / 3)',
                    marginLeft: '18px',
                    marginRight: '8px',
                    padding: '12px 0'
                }}>
                <span style={{fontWeight: 'bolder', paddingLeft: '5px'}}>{props.name}</span>
                <FontAwesomeIcon onClick={createNewTask} style={{paddingRight: '5px'}} icon={faAdd}/>
            </div>
            <div
                className="list-body"
                style={{
                    marginLeft: '18px',
                    marginRight: '8px',
                    padding: '12px 0'
                }}>
                {newTask.map(tasks => {
                    return tasks
                })}
            </div>
        </div>
    );
}

export default NewList;