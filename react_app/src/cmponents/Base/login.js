import React, {useRef, useState} from 'react';
import {socket} from "../../App";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Login(props) {

    const user = useRef()
    const room = useRef()
    let [contactRoom, setContactRoom] = useState('')
    let [userName, setUserName] = useState('')


    const connect = () => {
        props.room(contactRoom)
        props.user(userName)
        if (user === undefined || room === undefined) {
            props.login(false)
        }
        if (contactRoom !== '') {
            props.login(true)
            socket.emit('connect_room', contactRoom)
        }
    }

    const error = () => {
        return toast('user name & contact room is required', {
            draggable: true,
            style: {
                backgroundColor: '#ff4d4d',
                color: '#000000'
            },
            position: toast.POSITION.TOP_LEFT
        })
    }

    return (
        <div className="row mx-auto">
            <div className="d-grid gap-3 col-lg-4 col-md-5 col-sm-8 mx-auto" style={{marginTop: '12rem'}}>
                <h1 className="display-6 text-center text-success fw-bold">Connect to chat</h1>
                <input
                    onChange={() => setUserName(user.current.value)}
                    ref={user}
                    className="form-control bg-light border border-dark"
                    placeholder="Enter your name"
                    type="text"
                />
                <input
                    onChange={() => setContactRoom(room.current.value)}
                    ref={room}
                    className="form-control bg-light border border-dark"
                    placeholder="Connect room"
                    type="text"
                />
                <><ToastContainer draggable={false} autoClose={8000}/></>
                <button onClick={contactRoom !== '' && userName !== ''
                    ? connect
                    : error}
                        className="btn btn-success">join</button>
            </div>
        </div>
    );
}

export default Login;