import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'

function CreateList(props) {
    return (
        <div className="createList" style={{margin: '3rem 0 0 3rem', maxWidth: '25%', textAlign: 'center'}}>
            <div className="newList"
                 style={{
                     borderTop: '3px solid rgba(0,0,0,.3) ',
                     padding: '12px',
                     backgroundColor: 'rgba(0,0,0,.1)'
                 }}>
                <FontAwesomeIcon icon={faAdd}/>
                <span style={{paddingLeft: '5px'}}>Add new list</span>
            </div>
        </div>
    );
}

export default CreateList;