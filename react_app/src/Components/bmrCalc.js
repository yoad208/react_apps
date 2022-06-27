import React, {Component} from 'react';

class BmrCalc extends Component {
    state = {W: 0, H: 0, A: 0}
    Weight = React.createRef()
    Height = React.createRef()
    Age = React.createRef()
    result = this.state.A + this.state.H + this.state.W


    calcBmr = () => {
       this.setState({
           W: this.Weight.current.value,
           H: this.Height.current.value,
           A: this.Age.current.value
       });
        console.log(
            this.Weight.current.value,
            this.Height.current.value,
            this.Age.current.value
        )
        var result = parseInt()this.state.W) +
       this.props.getResult(this.state.A + this.state.H + this.state.W)
    }

    render() {
        return (
            <div className="d-flex flex-column gap-4 pt-2">
                <input ref={this.Weight} className="w-75 m-auto"  defaultValue={0}/>
                <input ref={this.Height} className="w-75 m-auto"  defaultValue={0}/>
                <input ref={this.Age} className="w-75 m-auto"  defaultValue={0}/>
                <button onClick={this.calcBmr} className="btn btn-success w-25 m-auto">Click Here</button>
            </div>
        );
    }
}

BmrCalc.propTypes = {};

export default BmrCalc;