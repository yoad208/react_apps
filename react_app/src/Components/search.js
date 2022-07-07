import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";

function Search(props) {

    const userSearch = useRef('')
    const navigate = useNavigate();

    return (
        <div className="container d-flex ">
            <input defaultValue="Search" ref={userSearch} type="text" className="search form-control mb-5"/>
            <button onClick={() => {
                props.getUserSearch(userSearch.current.value)
                navigate('/')
            }} className="btn btn-warning mb-5">Search</button>
        </div>
    );
}

export default Search;