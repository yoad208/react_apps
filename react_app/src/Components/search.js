import React, {useEffect, useRef, useState} from 'react';

function Search(props) {

    let userSearch = useRef()

    const getSearch = () => {
        props.getUserSearch(userSearch.current.value)
    }

    return (
        <div className="container d-flex justify-content-end">
            <input ref={userSearch} defaultValue="Search" type="text" className="form-control w-50"/>
            <button onClick={getSearch} className="btn btn-warning">Search</button>
        </div>
    );
}

export default Search;