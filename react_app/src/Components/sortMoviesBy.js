import React, { useRef } from 'react';

function SortMoviesBy(props) {

    let userSelect = useRef()

    return (
        <div className="">
            <select onChange={() => {
                props.sortByUser(userSelect.current.value)
            }} ref={userSelect} className="btn btn-warning">
                <option value="">SortBy</option>
                <option value="Title">Title</option>
                <option value="Year">Year</option>
            </select>
        </div>
    );
}

export default SortMoviesBy;