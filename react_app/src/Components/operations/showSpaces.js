import {useEffect} from "react";
import {ACTIONS} from "./createWorkSpace";

export default function ShowSpaces({spaces, dispatch}) {

    return <li>{spaces.name}</li>
}
