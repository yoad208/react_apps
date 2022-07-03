import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header";
import Navigation from "./Components/navigation";
import Search from "./Components/search";
import Logo from "./Components/logo";


const App = () => {

        return (
            <div className="App">
                <Header>
                    <Logo/>
                    <Navigation/>
                    <Search/>
                </Header>
            </div>
        )
}

export default App;
