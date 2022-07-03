import React from 'react';

function Header(props) {
    return (
        <div className="container-fluid bg-dark">
            <div className="container d-flex align-items-center">
                {props.children}
            </div>
        </div>
    );
}

export default Header;