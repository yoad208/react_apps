import {useContext, useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight, faGear, faGlobe, faHome} from '@fortawesome/free-solid-svg-icons'
import Logo from "./logo";
import Logout from "./logout";
import CreateWorkSpace from "../operations/createWorkSpace";
import {dataProvider} from "../../App";



export default function Navigation() {


    const [active, setActive] = useState(false)
    const {setSpaces, spaces, opacityBody, setOpacityBody} = useContext(dataProvider)



    const navigationStyle = {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        flexDirection: 'column',
        gap: '1.5rem',
        width: '13vw',
        maxWidth: '13vw',
        minHeight: '79.9vh',
    }

    return (
        <div className="navigation" style={{
            navigationStyle,
            backgroundColor: '#333',
            color: '#aaa'
        }}>
            <Logo/>
            <ul style={navigationStyle}>
                <li ><FontAwesomeIcon icon={faHome}/> Home</li>
                <li ><FontAwesomeIcon icon={faGlobe}/> spaces
                    <div style={{
                        marginLeft: '5.5rem',
                        transform: active ? 'rotate(90deg)' : 'none'
                    }} onClick={() => {
                        setActive(!active)
                    }}> <FontAwesomeIcon icon={faCaretRight}/></div>
                </li>
                {active ?<div style={{
                    maxHeight: '80px',
                    overflowY: '-moz-hidden-unscrollable',
                    overflowX: 'hidden',
                    paddingRight: '.5rem'
                }}> <CreateWorkSpace setSpaces={setSpaces} spaces={spaces} setActive={setOpacityBody} active={opacityBody}/> </div>: null}
                <li ><FontAwesomeIcon icon={faGear}/> Setting</li>
                <Logout/>
            </ul>
        </div>
    );
}