import React from "react";

class Counter extends React.Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState({
            couyarnt: this.state.count + 1,
        });
};

    render() {
        <div>Score:, {this.state.count}</div>;
    }
}

export default Counter;