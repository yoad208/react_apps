import React from 'react';

function Navigation(props) {
    return (
        <div className="container">
            <div className="navbar navbar-expand-lg p-3">
                <a className="text-warning p-3 text-decoration-none" href="#">Home</a>
                <a className="text-warning p-3 text-decoration-none" href="#">Category's</a>
                <a className="text-warning p-3 text-decoration-none" href="#">Setting</a>
                <a className="text-warning p-3 text-decoration-none" href="#">Help</a>
                <a className="text-warning p-3 text-decoration-none" href="#">Contact</a>
            </div>
        </div>
    );
}

export default Navigation;