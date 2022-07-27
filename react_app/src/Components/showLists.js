import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {ACTIONS} from "./createList";


export default function ShowLists({list, dispatch}) {

    const deleteList = () => {
        dispatch({type: ACTIONS.DELETE_LIST, payload: {id: list.id}})
    }


    const listStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'calc(1000px / 3)',
        backgroundColor: 'rgba(0,0,0,.1)',
        padding: '12px 6px',
        borderTop:
            list.status === 'TODO' ? '3px solid #f00':
                list.status === 'IN-PROGRESS' ? '3px solid gold':
                    list.status === 'COMPLETE' ? '3px solid #0f0':
                        '3px solid rgba(0,0,0,.3)'
    }

    return (
        <div style={listStyle}>
            {list.status}
            <FontAwesomeIcon onClick={deleteList} icon={faTrashCan}/>
        </div>
    );
}

