import React, {useRef} from 'react';

function Search(props) {

    const userSearch = useRef('')

    return (
        <div className="container d-flex justify-content-end">
            <input defaultValue="Search" ref={userSearch} type="text" className="form-control w-50"/>
            <button onClick={() => {
                props.getUserSearch(userSearch.current.value)
            }} className="btn btn-warning">Search</button>
        </div>
    );
}

export default Search;