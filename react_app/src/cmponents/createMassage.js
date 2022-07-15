import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {socket} from "../App";


function CreateMassage(props) {

    const messageInput = useRef()
    let [userName, setUserName] = useState('')
    let [connectRoom, setConnectRoom] = useState('')
    let [message, setMessage] = useState('')
    let [messageList, setMessageList] = useState([])

    useEffect(() => {
        socket.on('received_user', user => {
            setUserName(user)
        })
        socket.on('received_room', room => {
            setConnectRoom(room)
        })
        socket.on('received_message', data => {
            setMessageList([...messageList, data])
        })
    },[socket])


    const changeMessage = () => {
        setMessage(messageInput.current.value)
    }

    const createMessage = (e) => {
        e.preventDefault()

        const messageObj = {
            room: connectRoom,
            user: userName,
            message: message
        }


        socket.emit('send_message', messageObj)
        setMessageList([...messageList, messageObj])
        messageInput.current.value = ''
    }

    return (
        <div className="container col-lg-8 mx-auto">
            <form onSubmit={createMessage} className="d-flex border border-success rounded-pill bg-light">
                <input
                    onChange={changeMessage}
                    ref={messageInput}
                    className="form-control border-0 rounded-pill bg-light"
                    placeholder="Massage"
                    type="text"
                />
                <button className="btn btn-outline-success rounded-pill border-0">
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </button>
            </form>
        </div>

    );
}

export default CreateMassage