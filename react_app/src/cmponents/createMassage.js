import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'


function CreateMassage(props) {

    let [newMassage, setMassage] = useState([])
    let userMassage = useRef()

    const changeMassage = (e) => {
        setMassage(userMassage.current.value)
    }

    const createMassage = (e) => {
        e.preventDefault()

        const massages = {
            user: 'Yoad Azani',
            massage: newMassage,
        }

        props.handlerCreateMassage(massages)
    }

    return (
        <form className="d-flex border border-success rounded-pill bg-light ms-3 me-3" onSubmit={createMassage}>
            <input ref={userMassage} onChange={changeMassage}
                   className="form-control border-0 rounded-pill" placeholder="Massage" type="text"/>
            <button className="btn btn-outline-success rounded-pill border-0">
                <FontAwesomeIcon icon={faPaperPlane}/>
            </button>
        </form>
    );
}

export default CreateMassage