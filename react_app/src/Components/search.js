import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Search(props) {

    const userSearch = useRef('')
    const navigate = useNavigate();

    return (
        <div className="container d-flex justify-content-end">
            <input defaultValue="Search" ref={userSearch} type="text" className="form-control w-25"/>
            <button onClick={() => {
                props.getUserSearch(userSearch.current.value)
                navigate('/')
            }} className="btn btn-warning me-3">Search</button>
        </div>
    );
}

export default Search;