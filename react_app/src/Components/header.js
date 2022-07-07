import React from 'react';

function Header(props) {


    return (
        <div className="container-fluid bg-dark">
            <div className="container d-flex align-items-center mb-3">
                {props.children}
            </div>
        </div>
    );
}

export default Header;