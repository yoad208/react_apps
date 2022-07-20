import React, {useContext, useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {socket, context} from "../App";
import massage from "./massage";


function CreateMassage(props) {

    const messageInput = useRef()
    let [message, setMessage] = useState('')
    let [messageList, setMessageList] = useState([])

    const user = useContext(context)

    useEffect(() => {
        socket.on('received_message', data => {
            setMessageList(messageList => [...messageList, data])
            props.setNewMessageList(messageList => [...messageList, data])
        })
    },[socket])


    const changeMessage = (e) => {
        setMessage(e.target.value)
    }

    const createMessage = (e) => {
        e.preventDefault()

        const messageObj = {
            room: props.room,
            user: user,
            message: message,
            time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
        }


        socket.emit('send_message', messageObj)
        setMessageList(messageList => [...messageList, messageObj])
        messageInput.current.value = ''
    }

    return (
        <div className="container col-lg-8 mx-auto mb-3">
            <form onSubmit={createMessage} className="d-flex border border-success rounded-pill bg-light">
                <textarea onChange={e => changeMessage(e)}
                          ref={messageInput}
                          className="form-control border-0 rounded-pill bg-light"
                          style={{resize: "none"}}
                          placeholder="Massage"
                />

                <button className="btn btn-outline-success rounded-pill border-0">
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </button>
            </form>
        </div>

    );
}

export default CreateMassage