import React, {useRef, useState} from 'react';

function Search(props) {

    let [search, setSearch] = useState('')
    let userSearch = useRef()

    const getSearch = () => {
        setSearch(userSearch.current.value)
        props.search(search)
    }

    return (
        <div className="container d-flex justify-content-end">
            <input ref={userSearch}
                   defaultValue="Search" type="text" className="form-control w-50"/>
            <button onClick={getSearch} className="btn btn-warning">Search</button>
        </div>
    );
}

export default Search;