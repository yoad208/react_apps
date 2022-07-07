import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header";
import Search from "./Components/search";
import Logo from "./Components/logo";
import MovieCard from "./Components/movie_card";


const App = () => {
    const [search, setSearch] = useState('Power Rangers')

    document.body.style.backgroundColor = '#f6c102'
    return (
        <div className="App">
            <Header>
                <Logo/>
                <Search getUserSearch={setSearch}/>
            </Header>

            <MovieCard userSearch={search}/>
        </div>
    )
}

export default App;
