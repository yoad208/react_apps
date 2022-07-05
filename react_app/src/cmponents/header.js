import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div>
            <header className="container d-flex justify-content-between">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="btn btn-sm btn-light">Team</button>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">System</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" to="/">Home</Link>
                                <Link className="nav-link" to="/users">Users</Link>
                                <Link className="nav-link" to="/photos">Photos</Link>
                                <Link className="nav-link" to="/posts">Posts</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="d-flex justify-content-end align-items-center">
                    <input defaultValue="Insert your search" className="form-control h-75" type="text"/>
                    <button className="btn-sm btn-dark text-light h-75">Search</button>
                </div>
            </header>
        </div>
    );
}

export default Header;