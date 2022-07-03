import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header";
import Navigation from "./Components/navigation";
import Search from "./Components/search";
import Logo from "./Components/logo";
import MovieCard from "./Components/movie_card";


const App = () => {
    const [search, setSearch] = useState('')

    const getUserSearch = (_val) => {
        setSearch(_val)
    }

    return (
        <div className="App bg-warning">
            <Header>
                <Logo/>
                <Navigation/>
                <Search getUserSearch={getUserSearch}/>
            </Header>

            <MovieCard userSearch={search}/>
        </div>
    )
}

export default App;
