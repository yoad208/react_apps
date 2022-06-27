import './App.css';
import './Components/bmrCalc';
import BmrCalc from "./Components/bmrCalc";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";


class App extends Component {
    state = {result: null}

    getResult = (_val) => {
        this.setState({result: _val})
    }

    render() {
        return (
            <div className="App">
                <h4>BMR CALCULATOR</h4>
                <BmrCalc getResult = {this.getResult}/>
                <h4>{this.state.result}</h4>
            </div>
        )
    };
}

export default App;
