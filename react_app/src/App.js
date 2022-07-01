import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header";
import Albums from "./Components/albums";
import {useState} from "react";
import Search from "./Components/Search";
import Navigation from "./Components/navigation";


const App = (props) => {

    const [data, setData] = useState("");

    const getSearch = (_search) => {
        setData(_search)
    }

    return (
        <div className="App">
            <div className="m-auto ">

                <Header>
                    <Search getUserSearch={getSearch}>
                        <Navigation/>
                    </Search>
                </Header>

                <Albums userSearch={data}/>
            </div>
        </div>
    )
}

export default App;
