import React from 'react';
import {Link} from "react-router-dom";

function Logo(props) {
    return (
        <div className="p-25">
                <Link to="/">
                    <img className="w-25" src="https://cdn-icons-png.flaticon.com/512/5977/5977585.png" alt=""/>
                </Link>

        </div>
    );
}

export default Logo;