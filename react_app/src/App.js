import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header";
import Search from "./Components/search";
import MovieCard from "./Components/movie_card";
import SortMoviesBy from "./Components/sortMoviesBy";
import MovieInfo from "./Components/movieInfo";

const App = () => {
    const [search, setSearch] = useState('Power Rangers')
    const [sort, setSort] = useState('Power Rangers')

    document.body.style.backgroundColor = '#f6c102'

    return (
        <Router>
            <div className="App d-flex justify-content-between p-0">
                <Header>
                    <Search getUserSearch={setSearch}/>
                    <SortMoviesBy sortByUser={setSort}/>
                </Header>
            </div>
            <Routes>
                <Route exact path="/" element={<MovieCard userSearch={search} sortBy={sort}/>}> </Route>
                <Route exact path="/:id" element={<MovieInfo/>}> </Route>
            </Routes>
        </Router>
    )
}

export default App;
