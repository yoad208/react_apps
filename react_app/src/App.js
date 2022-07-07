import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header";
import Search from "./Components/search";
import Logo from "./Components/logo";
import MovieCard from "./Components/movie_card";
import SortMoviesBy from "./Components/sortMoviesBy";

const App = () => {
    const [search, setSearch] = useState('Power Rangers')
    const [sort, setSort] = useState('Power Rangers')

    document.body.style.backgroundColor = '#f6c102'

    return (
            <div className="App">
                <Header>
                    <Logo/>
                    <SortMoviesBy sortByUser={setSort}/>
                    <Search getUserSearch={setSearch}/>
                </Header>

                <MovieCard userSearch={search} sortBy={sort}/>
            </div>
    )
}

export default App;
