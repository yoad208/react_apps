import React, {useEffect, useState} from 'react';
import axios from "axios";

function MovieCard(props) {

    let [data, setData] = useState([]);

    useEffect(() => {
        getDataFromApi()
    },[data])

    const getDataFromApi = async () => {
        let URL = `https://www.omdbapi.com/?s=${props.userSearch}&apikey=ef7cc705`
        let {data} = await axios(URL);
        setData(data.Search)
    }

    return (
        <div className="container">
            <h2>Movies</h2>
            <div className="row">
                {data.map(item => {
                    return (
                        <div key={item.imdbID} className="row-cols-2 d-flex flex-wrap p-1 w-25">
                            <div className="card bg-dark text-center text-warning p-2 mb-3 shadow rounded-3 w-100 mx-auto">
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
}

export default MovieCard;