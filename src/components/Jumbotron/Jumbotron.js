import React from "react";
import "./Jumbotron";
import "./Jumbotron.css"


const Jumbotron = props => {
  return (
    <div className="main-container">
      <div className="row">
        <div className= "col-md-12">
          <div className="jumbotron">
            <h1>Clicky-Game</h1>
               <h2 className = "Jumbotron">Your Score: {props.children}</h2>
          </div>
        </div>
      </div>
  </div>
  )
};

export default Jumbotron;