import React, {Component} from "react";

class Counter extends Component {
    state = {myDate: new Date(), days: 0}

    componentDidMount() {
        // let daysLeft = this.calcDateFromDate(this.props.date)
        this.setState({days: 0})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.date !== prevProps.date) {
            console.log(this.props.date + ' ' + prevProps.date)
            let daysLeft = this.calcDateFromDate(this.props.date)
            this.setState({days: daysLeft})

        }
    }

    calcDateFromDate = (_date) => {
        let time = Date.parse(_date) - Date.parse(new Date())
        let days = time / (1000 * 60 * 60 * 24)
        return Math.floor(days)
    }

    render() {
        return (
            <div>
                <h2 className="fs-3">count down to {this.props.date}</h2>
                <h3 className="fs-3 text-danger">_{this.state.days}_ days</h3>
            </div>
        )
    }
}

export default Counter