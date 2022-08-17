import React, {createContext, useEffect, useState} from "react";
import Login from "./Components/baisc/login";
import Header from "./Components/baisc/header";
import Navigation from "./Components/baisc/navigation";
import Logout from "./Components/baisc/logout";
import useLocalStorage from './Components/customHooks/useLocalStorage';
import useAxios from "./Components/customHooks/useAxios";
import Body from "./Components/baisc/body";
import CurrentSpace from "./Components/operations/currentSpace";
import Calendar from "react-calendar";
import ShowLists from "./Components/operations/showLists";
import CreateList from "./Components/operations/createList";

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
                            <Body opacityBody={opacityBody}>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '12px',
                                    width: '53vw',
                                    maxWidth: '53vw',
                                    margin: '2rem 1rem 0 1rem',
                                    height: '37vw',
                                    boxShadow: 'rgba(0, 0, 0, 0.35) 0 5px 15px',
                                    overflow: 'auto',
                                    position: 'relative',
                                    overflowY: 'hidden',
                                    overflowX: "-moz-hidden-unscrollable"
                                }}>
                                    <div style={{
                                        height: '2.8rem',
                                        width: '53vw',
                                        backgroundColor: 'rgba(5,191,218,0.67)',
                                        position: 'fixed',
                                        borderRadius: '12px 12px 0 0',
                                    }}>
                                        {spaces.map(space => {
                                            return spaceName === space.name
                                                ?
                                                <CurrentSpace key={space.id} space={space} setSpaceName={setSpaceName}/>
                                                : null
                                        })}
                                    </div>
                                    {spaces.map(space => {
                                        return spaceName === space.name
                                            ? <CreateList key={space.id} space={space}/>
                                            : null
                                    })}
                                </div>
                                <div>
                                    <Calendar/>
                                    <div style={{
                                        borderRadius: '12px',
                                        maxWidth: '25vw',
                                        height: '15vw',
                                        marginTop: '1.2rem',
                                        boxShadow: 'rgba(0, 0, 0, 0.35) 0 5px 15px'
                                    }}/>
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
