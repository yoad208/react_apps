import React, {useEffect, useReducer, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import Tasks from "./tasks";
import newList from "./newList";


function NewList(props) {

    const [newTask, setNewTask] = useState([])
    const [id, setId] = useState(Date.now)

    const createNewTask = () => {
        setId(Date.now)
        return setNewTask([...newTask, {id: id, task:<Tasks name={props.name} id={id} list={newTask}/>
    }])}

    return (
        <div className="list-container" style={{paddingRight: '1rem', maxWidth: 'calc(1000px / 3)'}}>
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
                    return <div key={tasks.id}>
                        {tasks.task}
                    </div>
                })}
            </div>
        </div>
    );
}

export default NewList;