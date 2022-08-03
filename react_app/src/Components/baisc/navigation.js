import Logo from "./logo";
import Logout from "./logout";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight, faGear, faGlobe, faHome} from '@fortawesome/free-solid-svg-icons'
import CreateWorkSpace from "../operations/createWorkSpace";

export default function Navigation({flagOpacityBody, opacity}) {


    const [active, setActive] = useState(false)

    const navigationStyle = {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        flexDirection: 'column',
        gap: '1.5rem',
        maxWidth: '15vw',
        minHeight: '79.9vh',
    }

    return (
        <div className="navigation" style={{
            navigationStyle,
            borderRight: '1px solid rgba(0,0,0,.2)',
        }}>
            <Logo/>
            <ul style={navigationStyle}>
                <li><FontAwesomeIcon icon={faHome}/> Home</li>
                <li><FontAwesomeIcon icon={faGlobe}/> spaces
                    <div style={{
                        marginLeft: '6rem',
                        transform: active ? 'rotate(90deg)' : 'none'
                    }} onClick={() => setActive(!active)}> <FontAwesomeIcon icon={faCaretRight}/></div>
                </li>
                {active ?<div style={{
                    maxHeight: '80px',
                    overflowY: '-moz-hidden-unscrollable',
                    overflowX: 'hidden',
                    marginLeft: '1.5rem',
                    paddingRight: '.5rem'
                }}> <CreateWorkSpace setActive={flagOpacityBody} active={opacity}/> </div>: null}
                <li><FontAwesomeIcon icon={faGear} style={{marginBottom: '10rem'}}/> Setting</li>
                <Logout/>
            </ul>
        </div>
    );
}