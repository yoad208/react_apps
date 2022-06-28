import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./Components/counter";
import UserInput from "./Components/userInput";


class App extends Component {
    state = {myDate: "06-29-2022"}


    changeDate = (_val) => {
        this.setState({myDate: _val})// this.userInput.current.value
    }

    render() {
        return (
            <div className="App text-center row-cols-3">

                <div className="border border-dark m-auto mt-md-5 p-2">
                    {/* get the result and puts in the screen */}
                    <Counter date={this.state.myDate} day={this.state.day}/>
                    {/* get the user input from other Component */}
                    <UserInput getInput={this.changeDate}/>
                </div>
            </div>
        )
    };
}

export default App;
