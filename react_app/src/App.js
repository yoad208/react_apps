import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Massage from "./cmponents/massage";
import CreateMassage from "./cmponents/createMassage";

function App(props) {

    let [massage, setMassage] = useState( [])


    const createMassage = (m) => {
        setMassage(massage => [...massage, m])
    }

    document.body.style.backgroundColor = '#a2ecfc'

    return (
        <div className="App">
            <div className="row mt-4">
                <div className="col-lg-4 mx-auto pt-3 pb-3 rounded-3 shadow-lg">
                    <Massage newMassage={massage}/>
                    <CreateMassage handlerCreateMassage={createMassage}/>
                </div>
            </div>
        </div>
    )
}

export default App;
