import React, {useCallback, useEffect, useMemo, useState} from 'react';
import axios from "axios";

function MovieCard(props) {

    let [data, setData] = useState([]);
    let [error, setError] = useState([]);

    useEffect(() => {
        getDataFromApi()
    }, [props.userSearch])

    const getDataFromApi = async () => {
        let URL = `https://www.omdbapi.com/?s=${props.userSearch}&apikey=ef7cc705`
        let {data} = await axios(URL);
        setError(data)
        if (error.Response !== 'False') {
            setData(data.Search)
        }
    }


    if (error.Response !== 'False') {
        return (
            <div className="container">
                <h2>Movies</h2>
                <div className="row">
                    {data.map(item => {
                        return (
                            <div key={item.imdbID} className="row-cols-2 d-flex flex-wrap p-1 w-25">
                                <div
                                    className="card bg-dark text-center text-warning p-2 mb-3 shadow rounded-3 w-100 mx-auto">
                                    <p className="small">{item.Title}</p>
                                    <img className="w-100 h-100" src={item.Poster} alt=""/>
                                    <div className="lead">Year: {item.Year}</div>
                                    <button className="btn btn-outline-warning mt-1">More-Info</button>
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