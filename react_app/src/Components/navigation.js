import React from 'react';

function Navigation(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg p-4">
                <a className="ps-4 text-decoration-none text-light" href="#">Home</a>
                <a className="ps-4 text-decoration-none text-light" href="#">Category</a>
                <a className="ps-4 text-decoration-none text-light" href="#">Help</a>
                <a className="ps-4 text-decoration-none text-light" href="#">Setting</a>
            </nav>
        </div>
    );
}

export default Navigation;