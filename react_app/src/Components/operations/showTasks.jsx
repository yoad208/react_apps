import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashCan} from "@fortawesome/free-solid-svg-icons";

export default function ShowTasks({spaceName, task}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '.5rem',
            backgroundColor: '#fff',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0 1px 4px',
            maxWidth: 'calc(600px / 3)',
            margin: '0 0 .5rem .1rem',
            padding: '10px 5px 0 5px',
            borderRadius: '6px',
            wordBreak: 'break-word',
            minHeight: '6rem'
        }}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '.8rem'}}>
                                <span style={{
                                    fontSize: 'small',
                                    color: '#aaa',
                                }}>{spaceName}</span>
                <span>{task.taskName}</span>
            </div>
            <div style={{
                display: 'flex',
                gap: '.5rem',
                margin: '1.5rem 0 .5rem 0',
                justifyContent: 'right'
            }}>
                <FontAwesomeIcon icon={faEdit}/>
                <FontAwesomeIcon icon={faTrashCan}/>
            </div>
        </div>
    );
}