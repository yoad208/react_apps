import React, {useEffect, useState} from 'react';

function Login(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [state, setState] = useState(1)
    const [login, setLogin] = useState(false)
    const [target, setTarget] = useState({})

    useEffect(() => {
        setTarget({})
    },[])


    const handler = {
        get(target, property) {
            return target[property]
        },
        set(target, property, value) {
            switch (property) {
                case "name":
                    value.length >= 2
                        ? target[property] = value
                        : setState(0)
                    return target
                case "email":
                    value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
                        ? target[property] = value
                        : setState(0)
                    return target
                case "pass":
                    value.length >= 8
                        ? target[property] = value
                        : setState(0)
                    return target
                default:
                    return target
            }
        }
    }

    const validation = new Proxy(target, handler)

    const getDetails = (name, email, pass) => {
        validation.name = name
        validation.email = email
        validation.pass = pass
        setTarget({})
    }

    return (
        <div>
            <form onSubmit={e => {e.preventDefault()}}>
                <input onChange={e => setName(e.target.value)} type="text" placeholder="Name"/>
                <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email"/>
                <input onChange={e => setPass(e.target.value)} type="password" placeholder="Pass"/>
                <button onClick={() => {
                    getDetails(name, email, pass)
                    if (state === 1) {
                        setLogin(true)
                    }
                    console.log(login)
                }}>login
                </button>
            </form>
        </div>
    );
}

export default Login;