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
import CreateList from "./Components/operations/createList";
import DataChert from "./Components/custom/dataChert";

export const loginProvider = createContext()
export const dataProvider = createContext()

function App() {


    const [login, setLogin] = useLocalStorage('login', false)
    const [opacityBody, setOpacityBody] = useState(false)
    const [spaceName, setSpaceName] = useState('')
    const {response, request} = useAxios()
    const [spaces, setSpaces] = useState([])

    useEffect(() => {
    request('GET', 'http://localhost:3001')
    hasSameObjectsData(response, spaces)
    }, [spaces])


    const hasSameObjectsData = (response, spaces) => {
        let obj1Keys = Object.keys(response)
        let obj2Keys = Object.keys(spaces)

        if (obj1Keys.length === obj2Keys.length) {
            return obj1Keys.every(key => spaces.hasOwnProperty(key)
                && response[key].length === spaces[key].length
            )
                ? setSpaces(response)
                : spaces
        }
        return spaces
    }

    return (
        <loginProvider.Provider value={{login, setLogin}}>
            <div className="App">
                {!login
                    ? <Login/>
                    : <div style={{display: 'flex', minHeight: '70vh'}}>
                        <dataProvider.Provider value={{
                            setSpaces,
                            spaces,
                            opacityBody,
                            setOpacityBody,
                            setSpaceName,
                        }}>
                            <Navigation/>
                        </dataProvider.Provider>
                        <div style={{width: '85vw'}}>
                            <Header>
                                <div style={{
                                    float: 'right',
                                    margin: '0 6rem',
                                    padding: '0 5px',
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
                                    borderRadius: '6px',
                                    width: '57vw',
                                    maxWidth: '57vw',
                                    margin: '.8rem .4rem 0 .3rem',
                                    height: '40vw',
                                    boxShadow: 'rgba(0, 0, 0, 0.16) 0 1px 4px',
                                    overflow: 'auto',
                                    position: 'relative',
                                    overflowY: 'hidden',
                                    overflowX: "-moz-hidden-unscrollable"
                                }}>
                                    <div style={{
                                        height: '2.8rem',
                                        width: '57vw',
                                        backgroundColor: 'rgba(5,191,218,0.67)',
                                        position: 'fixed',
                                        borderRadius: '6px 6px 0 0',
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
                                        borderRadius: '6px',
                                        maxWidth: '23.5vw',
                                        height: '16.7vw',
                                        marginTop: '.5rem',
                                        boxShadow: 'rgba(0, 0, 0, 0.16) 0 1px 4px',
                                    }}>
                                        <DataChert spaces={spaces}/>
                                    </div>
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
