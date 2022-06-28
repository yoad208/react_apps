import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./Components/counter";


class App extends Component {
    state = {myDate: "2022-28-06", day: 0}
    userInput = React.createRef()

    changeDate = () => {
        this.setState({myDate: this.userInput.current.value})
    }

    render() {
        return (
            <div className="App text-center border border-2 w-50 m-auto">
                <Counter date={this.state.myDate} day={this.state.day}/>
                <div>
                    <input className={"text-primary h4"} ref={this.userInput} defaultValue={'Date'} type="date"/>
                </div>
                <button onClick={this.changeDate} className="btn btn-success">Change</button>
            </div>
        )
    };
}

export default App;
