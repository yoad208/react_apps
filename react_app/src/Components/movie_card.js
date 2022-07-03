import React from 'react';

function MovieCard(props) {
    return (
        <div className="container">
            <h2>Movies</h2>
            <div className="row">
                <div className="card col-lg-3">
                    <h3>Title</h3>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;