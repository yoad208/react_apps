import React, {Component} from 'react';

class BmrCalc extends Component {
    state = {W: 0, H: 0, A: 0}
    Weight = React.createRef()
    Height = React.createRef()
    Age = React.createRef()
    result = 0


    calcBmr = () => {
       this.setState({
           W: this.Weight.current.value,
           H: this.Height.current.value,
           A: this.Age.current.value
       });
       this.result = parseInt(this.state.W) + parseInt(this.state.H) + parseInt(this.state.A)
       this.props.getResult(this.result)
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