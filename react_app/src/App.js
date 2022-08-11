import {createContext, useEffect, useState} from "react";
import Login from "./Components/baisc/login";
import Header from "./Components/baisc/header";
import Navigation from "./Components/baisc/navigation";
import Logout from "./Components/baisc/logout";
import useLocalStorage from './Components/customHooks/useLocalStorage';
import useAxios from "./Components/customHooks/useAxios";
import Body from "./Components/baisc/body";
import CurrentSpace from "./Components/operations/currentSpace";


export const loginProvider = createContext()
export const dataProvider = createContext()

function App() {


    const [login, setLogin] = useLocalStorage('login', false)
    const [opacityBody, setOpacityBody] = useState(false)
    const [showSpaces, setShowSpaces] = useState(false)
    const [spaces, setSpaces] = useState([])
    const [spaceName, setSpaceName] = useState('')
    const {response, request} = useAxios()


    useEffect(() => {
        request('GET', 'http://localhost:3001')
        console.log(response)
        setSpaces(response)
    }, [showSpaces])

    return (
        <loginProvider.Provider value={{login, setLogin}}>
            <div className="App">
                {!login
                    ? <Login/>
                    : <div style={{display: 'flex', minHeight: '70vh'}}>
                        <dataProvider.Provider value={{
                            setSpaces,
                            spaces,
                            setShowSpaces,
                            opacityBody,
                            setOpacityBody,
                            setSpaceName
                        }}>
                            <Navigation/>
                        </dataProvider.Provider>
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
                            <Body>
                                {spaces.map((space, index)=> {
                                    return spaceName === space.name
                                        ? <CurrentSpace key={space.id} space={space}/>
                                        : null
                                })}
                            </Body>
                        </div>
                    </div>
                }
            </div>
        </loginProvider.Provider>

    )

}

export default App;
