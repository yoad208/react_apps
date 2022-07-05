import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./home";
import Users from "./users";
import Posts from "./posts";
import Photos from "./photos";

function Routers({children}) {

    return (
        <Router>
            {children}
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/users" element={<Users/>}/>
                <Route exact path="/posts" element={<Posts/>}/>
                <Route exact path="/photos" element={<Photos/>}/>
            </Routes>
        </Router>
    );
}

export default Routers;