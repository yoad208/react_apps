import React, {useState} from "react";
import Login from "./Components/baisc/login";
import Header from "./Components/baisc/header";
import Navigation from "./Components/baisc/navigation";
import Logo from "./Components/baisc/logo";
import Body from "./Components/baisc/body";
import CreateList from "./Components/createList";


function App() {

    const [login, setLogin] = useState(false)

    return (
        <div className="App">
            <div className="container">
                {!login
                    ? <Login setLogin={setLogin}/>
                    : <>
                        <Header>
                            <div
                                style={{
                                    padding: '0 6rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <Logo/>
                                <Navigation/>
                            </div>
                        </Header>
                        <Body>
                            <CreateList/>
                        </Body>
                    </>
                }
            </div>
        </div>

    )

}

export default App;
