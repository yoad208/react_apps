import React from "react";


const Header = (props) => {

    return (
        <header className="container-fluid">
            {props.children}
        </header>
    );
}

export default Header;