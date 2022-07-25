import React, {useRef, useState} from 'react';

function Tasks(props) {

    const taskInput = useRef()
    const [flag, setFlag] = useState(false)
    const [task, setTask] = useState('')

    const addTask = (e) => {
        e.preventDefault()
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
                : <div className="task"
                       style={{
                           backgroundColor: 'rgba(0,0,0,.1)',
                           border: '1px solid rgba(0,0,0,.2)',
                           padding: '12px',
                           marginBottom: '5px'
                       }}>
                    <span>{task}</span>
                </div>
            }
        </div>
    );
}

export default Tasks;