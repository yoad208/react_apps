import {useContext} from "react";
import {loginProvider} from "../../App";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

export default function Logout() {

    const {setLogin} = useContext(loginProvider)

    return <li onClick={() => {
        setLogin(false)
    }}><FontAwesomeIcon icon={faArrowRightFromBracket}/> Log-out</li>;
}
