import React, {createContext, useEffect, useState} from "react";
import Login from "./Components/baisc/login";
import Header from "./Components/baisc/header";
import Navigation from "./Components/baisc/navigation";
import Body from "./Components/baisc/body";
import CreateList from "./Components/operations/createList";
import Logout from "./Components/baisc/logout";
import useLocalStorage from './Components/customHooks/useLocalStorage'
import Calendar from "react-calendar";


export const loginProvider = createContext()

function App() {


    const [login, setLogin] = useLocalStorage('login', false)
    const [flag, setFlag] = useState(false)

    return (
        <loginProvider.Provider value={{login, setLogin}}>
            <div className="App">
                {!login
                    ? <Login/>
                    : <div style={{
                        display: 'flex',
                        minHeight: '70vh'
                    }}>
                        <Navigation flagOpacityBody={setFlag} opacity={flag}/>
                        <div style={{width: '85vw'}}>
                            <Header>
                                <div style={{
                                    float: 'right',
                                    margin: '.8rem 6rem',
                                    padding: '2px 5px',
                                    cursor: 'pointer',
                                    listStyle: 'none'
                                }}>
                                    <Logout/>
                                </div>
                            </Header>

                            <Body flag={flag}>
                                <CreateList/>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
                                    <Calendar/>
                                    <div style={{width: '298px', height: '205px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',}}> </div>
                                </div>
                            </Body>
                        </div>
                    </div>
                }
            </div>
        </loginProvider.Provider>

    )

}

export default App;
