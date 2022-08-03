import React, {createContext, useState} from "react";
import Login from "./Components/baisc/login";
import Header from "./Components/baisc/header";
import Navigation from "./Components/baisc/navigation";
import Body from "./Components/baisc/body";
import CreateList from "./Components/createList";
import Logout from "./Components/baisc/logout";
import CreateWorkSpace from "./Components/createWorkSpace";


export const loginProvider = createContext()

function App() {

    const [login, setLogin] = useState()
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
                                    listStyle: 'none',
                                    border: '2px solid rgba(0,0,255,.1)',
                                    borderRadius: '6px',
                                }}>
                                    <Logout/>
                                </div>
                            </Header>

                            <Body flag={flag}>
                                    <CreateList/>
                            </Body>
                        </div>
                    </div>
                }
            </div>
        </loginProvider.Provider>

    )

}

export default App;
