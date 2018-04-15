import React from "react";
import "./Jumbotron";


const Jumbotron = props => {
  return (
    <div className="main-container">
      <div className="jumbotron">
        <h1>Clicky Game</h1>
        <p>Click on image to earn points, but don't click on any more than once!</p>
          <h2 className = "Jumbotron">Your Score:{props.children}</h2>      
    </div>
  </div>
  )
};

export default Jumbotron;