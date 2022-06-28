import React, {Component} from 'react';

class UserInput extends Component {

    userInput = React.createRef()

    getDays = () => {
        this.props.getInput(this.userInput.current.value)
    }

    render() {
        return (
            <div>
                <div>
                    <input className={"h4 mw-100 bg-dark text-light"} ref={this.userInput} defaultValue={'Date'} type="date"/>
                </div>
                <button onClick={this.getDays} className="btn btn-success">Change</button>
            </div>
        );
    }
}

export default UserInput;