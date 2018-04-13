import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Counter from "./components/Counter/Counter";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
import "./App.css";


const App = () => (
    <Wrapper>
        <Jumbotron>Street Fight</Jumbotron>
        <Counter />
        {characters.map((friend, index) => {
            return (
                <CharacterCard
                    key={index}
                    image={characters.image}
                />
            );
        })}
    </Wrapper>
);

// class App extends Component {
//     state = {
//         characters
//     };

//     removeCharacter = id => {
//         const characters = this.state.characters.filter(character => character.id !== id);
//         this.setState({ characters });
//     };
//         render() {
//             return ( 
//                 <Wrapper>
//                     <Jumbotron>Street Fighter</Jumbotron>
//                     <Counter />
//                     {this.state.characters.map(character => (
//                         <CharacterCard
//                             removeCharacter={this.removeCharacter}
//                             id={character.id}
//                             key={character.id}
//                             image={character.image}
//                         />
//                     ))}
//                 </Wrapper>
//             );
//         }
//     }

export default App;
