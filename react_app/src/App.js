import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header";
import Albums from "./Components/albums";
import {useState} from "react";


const App = (props) => {

    const [data, setData] = useState("");

    const getSearch = (_search) => {
        setData(_search)
    }

    return (
        <div className="App">
            <div className="m-auto ">
                <Header getUserSearch={getSearch}/>
                <Albums userSearch={data}/>
            </div>
        </div>
    )
}

export default App;
