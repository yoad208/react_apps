import React, {useRef} from 'react';

function Search(props) {

    const userSearch = useRef('')

    const getSearch = () => {
        props.getUserSearch(userSearch.current.value)
    }

    return (
        <div className="container d-flex justify-content-end">
            <input defaultValue="Search" ref={userSearch} type="text" className="form-control w-50"/>
            <button onClick={getSearch} className="btn btn-warning">Search</button>
        </div>
    );
}

export default Search;