import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'

function Tasks(props) {

    const taskInput = useRef()
    const [flag, setFlag] = useState(false)
    const [task, setTask] = useState('')
    const [taskList, setTasksList] = useState({})

    useEffect(() => {
        console.log(flag)
    },[flag])

    const newTask = {
        id: props.id,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
        todo: task,
        complete: 0
    }
    const addTask = (e) => {
        e.preventDefault()


        setTasksList(newTask)

        return setFlag(true)
    }

    return (
        <div>
            {!flag ?
                <form onSubmit={e => {
                    e.preventDefault()
                }}>
                    <input
                        onChange={() => setTask(taskInput.current.value)}
                        ref={taskInput}
                        type="text"
                        placeholder="add task"
                    />
                    <button onClick={addTask}>add</button>
                </form>
                : <div  className="task"
                       style={{
                           display: "flex",
                           justifyContent: 'space-between',
                           backgroundColor: 'rgba(0,0,0,.1)',
                           border: '1px solid rgba(0,0,0,.2)',
                           padding: '12px',
                           marginBottom: '5px',
                           margin: '5px auto',
                           width: '100%'
                       }}>
                    <div className="data" style={{
                        display: "flex", flexDirection: "column", gap: '2rem',
                        wordWrap: 'break-word', width: '100%'
                    }}>
                        <span>{taskList.todo}</span>

                        <div className="option" style={{display: "flex", justifyContent: 'space-between'}}>

                            <div className="time">
                                <span>{taskList.time}</span>
                            </div>

                            <div className="option" style={{display: 'flex', gap: '1rem'}}>
                                {props.name !== 'COMPLETE'
                                    ? <>
                                        <FontAwesomeIcon icon={faTrashAlt}
                                                         style={{color: '#bb0101'}}/>
                                        <FontAwesomeIcon onClick={() => setFlag(false)} icon={faEdit} style={{color: '#737373'}}/>
                                    </>
                                    :
                                    <FontAwesomeIcon icon={faTrashAlt} style={{color: '#bb0101'}}/>
                                }
                            </div>

                        </div>
                    </div>

                </div>
            }
        </div>
    );
}

export default Tasks;