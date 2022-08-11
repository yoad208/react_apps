import React, {useContext, useRef} from 'react';
import {loginProvider} from "../../App";

function Login() {

    const name = useRef('')
    const email = useRef('')
    const pass = useRef('')
    const {setLogin} = useContext(loginProvider)

    const set_login = () => {
        const data = {
            name: name.current.value,
            email: email.current.value,
            pass: pass.current.value
        }
        if (data.name && data.pass && data.email) {
            setLogin(true)
        }
    }

    return (

        <div className="login">
            <form onSubmit={e => e.preventDefault()}>
                <h1>Login</h1>
                <input ref={name} type="text" placeholder='Name' required/>
                <input ref={email} type="email" placeholder='Email' required/>
                <input ref={pass} type="password" placeholder='Password' required/>
                <button onClick={set_login} type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;