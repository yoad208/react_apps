import React, {createContext, useEffect, useRef, useState} from 'react';
import { socket } from "../../App";

function Login(props) {


    const user = useRef()
    const room = useRef()
    let [userName, setUserName] = useState('')
    let [contactRoom, setContactRoom] = useState('')


    const connect = () => {
        props.login(true)
        socket.emit('set_user', userName)
        socket.emit('connect_room', contactRoom)
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
                <button onClick={connect} className="btn btn-success">join</button>
            </div>
        </div>
    );
}

export default Login;