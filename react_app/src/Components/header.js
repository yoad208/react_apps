import React from 'react';

function Header(props) {


    return (
        <div className="container-fluid header">
            <div className=" container d-flex justify-content-between mb-3 pt-5">
                {props.children}
            </div>
        </div>
    );
}

export default Header;