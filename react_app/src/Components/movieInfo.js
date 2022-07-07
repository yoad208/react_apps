import React from 'react';
import {useParams} from "react-router-dom";


function MovieInfo(props) {

    let params = useParams()
    return (
        <div className="container">
            <h1 className="display-6 text-muted">{params.id}</h1>
        </div>
    );
}

export default MovieInfo;