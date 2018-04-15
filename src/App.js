import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import characters from "./characters.json";
import "./App.css";

//
class App extends Component {
    state = {
        characters
    };

    score = 0; 

    //handles operations when cards are clicked
    clickedCard = (id) => {
        const characterCard = this.state.characters.map(character => {
            //if character id is equal use will receive an alert if not score is added. 
            if (character.id === id){
              if (character.clicked === false){  
                character.clicked=true;
                this.score++;
              } else {
                alert("One too many clicks on the same fighter! Try again.");
                this.resetGame(); 
              }
            } else {
            //when users score is 12 user wins game and game restarts
              if (this.score === 12) {
                  alert("You win!");
                  this.resetGame();
              }
            }
            return characterCard;
          });
        
          this.setState({characters});
        };
//function to shuffle each card in the array 
 shuffleCards = (array)=> {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
 }
    //reset game 
    resetGame = () => {
        this.score = 0;
        const characterCard = this.state.characters.map(character => {
          character.clicked = false;
          return characterCard;
        })
      }
      //renders jumbotron, score and images to the DOM, also calls the shuffleCard function when character is selected. 
        render() {
            return ( 
                <div>
                    <Wrapper>
                        <Jumbotron> {this.score} </Jumbotron>
                            {this.shuffleCards(this.state.characters).map(character => (
                            <CharacterCard
                                id={character.id}
                                key={character.id}
                                image={character.image}
                                clickedCard={this.clickedCard}
                            />
                        ))}
                    </Wrapper>
                </div>
                );
            }
        }


export default App;
