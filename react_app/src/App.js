import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from "./cmponents/routers";
import Header from "./cmponents/header";

function App() {

    return (
        <Routers>
            <div className="App container-fluid bg-info">
                <Header/>
            </div>
        </Routers>
    )
}

export default App;
