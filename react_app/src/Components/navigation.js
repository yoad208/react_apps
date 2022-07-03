import React, {useRef} from 'react';

function Navigation(props) {

    const sort = useRef('')

    return (
        <div className="container">
            <div className="navbar navbar-expand-lg p-3">
                <a className="btn-sm btn-warning p-2 me-2 text-decoration-none" href="#">Home</a>
                <a className="btn-sm btn-warning p-2 me-2 text-decoration-none" href="#">Category's</a>
                <a className="btn-sm btn-warning p-2 me-2 text-decoration-none" href="#">Setting</a>
                <a className="btn-sm btn-warning p-2 me-2 text-decoration-none" href="#">Help</a>
                <a className="btn-sm btn-warning p-2 me-2 text-decoration-none" href="#">Contact</a>
            </div>
        </div>
    );
}

export default Navigation;