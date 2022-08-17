import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import useAxios from "../customHooks/useAxios";
import data from "bootstrap/js/src/dom/data";

export default function CreateTask({setCreateTask, list, space, listStatus}) {

    const [taskName, setTaskName]= useState('')
    const newLists = space.lists.slice()
    const [task, setTask] = useState({})
    const {request} = useAxios()

    useEffect(() => {
        setTask({
            date: Date.now(),
            taskName: taskName,
            complete: false
        })
    }, [taskName])


    const createTask = (e) => {
        e.preventDefault()
        for (let i = 0; i < space.lists.length; i++) {
            if (space.lists[i].status === listStatus) {
                newLists[i] = {...newLists[i], tasks: [...newLists[i].tasks, task]}
            }
        }
        console.log(newLists)
        if (taskName) {
            request('EDIT', `http://localhost:3001/${space._id}`, {...space, lists: newLists})
        }
        setCreateTask(createTask => !createTask)
    }

    return (
        <form onSubmit={createTask}
              style={{
                  border: '1px solid rgba(5,191,218,0.67)',
                  borderRadius: '8px',
                  height: '3.5rem',
                  maxWidth: '12rem',
                  padding: '.5rem',
              }}>
            <div style={{
                display: "flex",
                alignItems: 'start',
                gap: '.3rem'
            }}>
                <FontAwesomeIcon style={{width: "8px"}} icon={faX} onClick={() => taskName.current.value = ''}/>
                <input style={{border: 'none', caretColor: 'rgba(5,191,218,0.67)', outline: 'none', height: '1rem'}}
                       placeholder="Add task name"
                       type="text"
                       aria-multiline="true"
                       autoFocus={true}
                       onChange={e => setTaskName(e.target.value)}/>
            </div>
            <button
                style={{
                    marginTop: '1rem',
                    float: 'right',
                    border: 'none',
                    backgroundColor: 'rgba(5,191,218,0.67)',
                    color: 'rgba(0,0,0,.5)',
                    borderRadius: '5px',
                    padding: '.2rem'
                }}
                type="submit">Save
            </button>
        </form>
    );
}