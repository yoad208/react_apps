import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function Navigation(props) {

    return (
        <Router>
        <div className="container">
            <div className="navbar navbar-expand-lg p-3">
                    <div className="navbar-nav">
                        <Link className="btn-sm btn-warning text-decoration-none me-2" to="Home">Home</Link>
                        <Link className="btn-sm btn-warning text-decoration-none me-2" to="Category's">Category's</Link>
                        <Link className="btn-sm btn-warning text-decoration-none me-2" to="Setting">Setting</Link>
                        <Link className="btn-sm btn-warning text-decoration-none me-2" to="Help">Help</Link>
                        <Link className="btn-sm btn-warning text-decoration-none me-2" to="Contact">Contact</Link>
                    </div>
                </div>
        </div>
        </Router>
    );
}

export default Navigation;