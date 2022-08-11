import {useContext, useRef} from "react";
import {dataProvider} from "../../App";

export default function ShowSpacesName({spaces}) {

    const name = useRef()
    const {setSpaceName} = useContext(dataProvider)

    return (<li ref={name} onClick={() => setSpaceName(name.current.innerHTML)}>{spaces.name}</li>)
}
