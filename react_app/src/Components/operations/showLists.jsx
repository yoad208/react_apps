import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faEdit, faEllipsis, faEyeDropper, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import useAxios from "../customHooks/useAxios";
import CreateTask from "./createTask";
import ShowTasks from "./showTasks";

function ShowLists({list, space}) {

    const [navOpen, setNavOpen] = useState(false)
    const [createTask, setCreateTask] = useState(false)
    const [listStatus, setListStatus] = useState('')
    const {request} = useAxios()

    const deleteList = () => {
        request('EDIT', `http://localhost:3001/${space._id}`,
            {...space.lists, lists: space.lists.filter(space => space._id !== list._id)})
        setNavOpen(false)
    }

    // const renameList = () => {
    //     request('EDIT', `http://localhost:3001/${space._id}`,
    //         {...space.lists, lists: space.lists.filter(space => space._id !== list._id)})
    //     setNavOpen(false)
    // }

    return (
        <>
            <div>
                <div style={{
                    marginTop: '3rem',
                    marginRight: '.8rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 'calc(600px / 3)',
                    borderTop: '3px solid silver',
                    height: '2rem',
                    maxHeight: '2rem',
                    borderRadius: '6px',
                    padding: '10px 5px 0 5px',
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0 2px 8px 0',
                }}>
                    <span>{list.status}</span>
                    <div style={{width: '2rem', zIndex: '1', overflow: 'revert', position: 'relative'}}>
                        <FontAwesomeIcon onClick={() => setNavOpen(!navOpen)} icon={faEllipsis}/>
                        {navOpen
                            ? <div style={{
                                width: '10rem',
                                marginTop: '.9rem',
                                padding: '5px 2rem 5px 0',
                                boxShadow: 'rgba(99, 99, 99, 0.2) 0 2px 8px 0',
                                backgroundColor: '#fff',
                                borderRadius: '6px',
                                position: 'absolute',
                                right: '-15%',
                                top: '60%'
                            }}>
                                <ul style={{
                                    listStyle: "none",
                                    paddingLeft: '1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    color: 'rgba(0,0,0,.5)'
                                }}>
                                    <li style={{cursor: 'pointer'}} >
                                        <FontAwesomeIcon style={{paddingRight: '.5rem', color: '#aaa'}}
                                                         icon={faEdit}/> Rename
                                    </li>
                                    <li style={{cursor: 'pointer'}} onClick={deleteList}>
                                        <FontAwesomeIcon style={{paddingRight: '.5rem', color: '#f00'}}
                                                         icon={faTrashCan}/> Delete
                                    </li>
                                    <li style={{cursor: 'pointer'}} >
                                        <FontAwesomeIcon style={{paddingRight: '.5rem', color: '#333'}}
                                                         icon={faEyeDropper}/> Edit color
                                    </li>
                                    <li style={{cursor: 'pointer'}} >
                                        <FontAwesomeIcon
                                            onClick={() => {setCreateTask(!createTask); setNavOpen(false)}}
                                            style={{paddingRight: '.5rem', color: '#00f'}}
                                            icon={faAdd}/> Add New Task
                                    </li>
                                </ul>
                            </div>
                            : null}
                    </div>
                </div>
                <div style={{maxHeight: '53vh',
                    marginTop: '1rem',
                    width: 'calc(600px / 2.8)',
                    overflow: 'auto',
                    overflowX: 'hidden',
                    overflowY: '-moz-hidden-unscrollable'
                }}>
                    {list.tasks.map(task => {
                        return <ShowTasks key={task._id} task={task} spaceName={space.name}/>
                    })}

                    <button
                        style={{background: 'none', margin: '.5rem 0 0 .2rem', border: 'none', color: 'rgba(0,0,0,.2)'}}
                        onClick={() => {setCreateTask(!createTask); setListStatus(list.status)}}>NEW TASK
                    </button>

                    {space.lists.map(list => {
                        return listStatus === list.status && createTask
                            ? <CreateTask key={list._id} listStatus={listStatus} setCreateTask={setCreateTask}
                                          space={space}
                                          list={list}/>
                            : null
                    })}
                </div>
            </div>
        </>
    );
}

export default ShowLists;