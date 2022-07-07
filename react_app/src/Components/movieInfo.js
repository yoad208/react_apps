import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";


function MovieInfo(props) {

    const params = useParams()
    const [info, setInfo] = useState([])

    useEffect(() => {
        getMovieInfo()
    }, [])

    const getMovieInfo = async () => {
        let URL = `https://www.omdbapi.com/?i=${params.id}&apikey=ef7cc705`
        let {data} = await axios.get(URL)
        setInfo(data)
    }

    return (
        <div className="container mb-3">
            <div
                className="col-lg-8 col-md-10 col-sm-12 bg-white bg-opacity-10 rounded-3 shadow-lg mx-auto overflow-hidden">
                <div className="p-1 w-50 float-lg-start float-md-start">
                    <img className="p-2 w-100 " src={info.Poster} alt="Poster"/>
                </div>
                <p className="lead fw-bold pt-2">{info.Title}</p>
                <p className="lead pe-2"><b> Year - </b> {info.Year}</p>
                <p className="lead pe-2"><b> Score - </b> {info.Metascore}</p>
                <p className="lead pe-2"><b> Released - </b> {info.Released}</p>
                <p className="lead pe-2"><b> Runtime - </b> {info.Runtime}</p>
                <p className="lead pe-2"><b> Genre - </b> {info.Genre}</p>
                <p className="lead pe-2"><b> Language - </b> {info.Language}</p>
                <p className="lead pe-2"><b> Writer - </b> {info.Writer}</p>
                <p className="lead pe-2"><b> Plot - </b> {info.Plot}</p>
                <Link className="btn btn-outline-dark w-100 fw-bolder" to="/">Back to home page</Link>
            </div>
        </div>
    );
}

export default MovieInfo;