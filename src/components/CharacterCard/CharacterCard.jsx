import React from "react";
import Card from "./Card";
import characters from "../../characters.json";

class CharacterCard extends React.Component {
    state = {
        count: 0,
    };

    imcrementCounter = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <div
                style={{
                    cursor: "pointer",
                }}
                 onclick={this.incrementCounter}>
                <Card
                    clickCounter={this.state.count}
                    image={this.props.image}
                />
            </div>
        );
    }
}

export default CharacterCard;