import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header";
import Search from "./Components/search";
import Logo from "./Components/logo";
import MovieCard from "./Components/movie_card";
import SortMoviesBy from "./Components/sortMoviesBy";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import MovieInfo from "./Components/movieInfo";

const App = () => {
    const [search, setSearch] = useState('Power Rangers')
    const [sort, setSort] = useState('Power Rangers')

    document.body.style.backgroundColor = '#f6c102'

    return (
        <Router>
            <div className="App">
                <Header>
                    <Logo/>
                    <Search getUserSearch={setSearch}/>
                    <SortMoviesBy sortByUser={setSort}/>
                </Header>
            </div>
            <Routes>
                <Route exact path="/" element={ <MovieCard userSearch={search} sortBy={sort}/> }> </Route>
                <Route exact path="/:id" element={ <MovieInfo/> }> </Route>
            </Routes>
        </Router>
    )
}

export default App;
