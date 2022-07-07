import React, { useEffect, useState } from 'react';
import axios from "axios";

import { sortBy } from "lodash/collection";
import { Link } from "react-router-dom";


function MovieCard(props) {

    let [data, setData] = useState([]);
    let [error, setError] = useState([]);

    useEffect(() => {
        getDataFromApi()
    }, [props.userSearch, props.sortBy])


    const getDataFromApi = async () => {
        let URL = `https://www.omdbapi.com/?s=${props.userSearch}&apikey=ef7cc705`
        let {data} = await axios(URL);
        setError(data)
        if (error.Response !== 'False') {
            let sortMovies = sortBy(data.Search, props.sortBy)
            setData(sortMovies)
        }
    }


    if (error.Response !== 'False') {
        return (
            <div className="container">
                <div className="row">
                    <h2>Movies</h2>
                    {data.map(item => {
                        return (
                            <div key={item.imdbID} className="col-lg-4 col-md-6 d-flex flex-wrap">
                                <div className="card bg-dark text-center text-warning p-3 mb-3 shadow rounded-3 w-100">
                                    <p className="small">{item.Title}</p>
                                    <img className="w-100 h-100" src={item.Poster} alt="Poster"/>
                                    <div className="lead">Year: {item.Year}</div>
                                    <Link className="btn btn-outline-warning mt-1" to={"/" + item.imdbID}>More info </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <div className="text-dark text-center p-3">
                <p className="display-6 fw-bolder">Movie not found!</p>
            </div>
        )
    }
}


export default MovieCard;