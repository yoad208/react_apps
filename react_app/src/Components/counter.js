import React, {Component} from "react";

class Counter extends Component {
    state = {myDate: "2022-28-06", days: 999}

    componentDidMount() {
        let daysLeft = this.calcDateFromDate(this.props.date)
        this.setState({days: daysLeft})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.date != prevProps.date) {

            let daysLeft = this.calcDateFromDate(this.props.date)
            this.setState({days: daysLeft})

        }
    }

    calcDateFromDate = (_date) => {
        let time = Date.parse(_date) - Date.parse(new Date())
        let days = time / (100 * 60 * 60 * 24)
        return Math.floor(days)
    }

    render() {
        return (
            <div>
                <h2>count down to {this.props.date}</h2>
                <h3>Days: {this.state.days}</h3>
            </div>
        )
    }
}

export default Counter