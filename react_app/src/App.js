import React, { useState } from "react";
import Login from "./Components/baisc/login";
import Board from "./Components/baisc/board";


function App() {

    const [login, setLogin] = useState(false)

    return (
        <div className="App">
            <div className="container" style={{padding: '0 6rem'}}>
                {!login
                    ? <Login setLogin={setLogin}/>
                    : <Board/>
                }
            </div>

        </div>

    )

}

export default App;
