import React from 'react';

function Search(props) {
    return (
        <div className="container d-flex justify-content-end">
            <input defaultValue="Search" type="text" className="form-control w-50"/>
            <button className="btn btn-warning">Search</button>
        </div>
    );
}

export default Search;