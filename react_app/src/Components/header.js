import React from "react";


const Header = (props) => {

    let userSearch = React.createRef()

    const sendUserSearch = () => {
        props.getUserSearch(userSearch.current.value)
    }

    return (
        <header className="container-fluid">
            <nav className="bg-info p-2">
                <input ref={userSearch} type="text"/>
                <button onClick={sendUserSearch} className="btn btn-primary">Search</button>
            </nav>
        </header>
    );
}

export default Header;