import React from 'react';

function Search(props) {


    let userSearch = React.createRef()

    const sendUserSearch = () => {
        props.getUserSearch(userSearch.current.value)
    }

    return (
        <div className="bg-dark d-flex justify-content-between align-content-center">
            <div className="p-4">
                <input defaultValue="enter yor search" onChange={sendUserSearch} ref={userSearch} type="text"/>
                <button onSubmit={sendUserSearch} className="btn btn-primary">Search</button>
            </div>
            {props.children}
        </div>
    );
}

export default Search;