import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client'
import Login from "./cmponents/Base/login";
import Massage from "./cmponents/massage";
import CreateMassage from "./cmponents/createMassage";

export let socket;
const CONNECTING_PORT = 'http://localhost:3001';


function App(props) {
    document.body.style.backgroundColor = '#343434'

    let [login, setLogin] = useState(false)


    useEffect(() => {
        socket = io(CONNECTING_PORT)
    }, [socket])

    return (
        <div className="App">
            <div className="row mt-1">
                {!login ? (
                    <Login login={setLogin}/>
                ) : (
                    <div className="container bg-body bg-opacity-25">
                        <Massage />
                        <CreateMassage />
                    </div>
                )}
            </div>
        </div>

    )
}

export default App;
