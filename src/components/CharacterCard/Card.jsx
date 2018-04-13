import React from "react";
import "./CharacterCard.css";

const Card = props => (
    <div className = "card">
        <div className ="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        {/* <span onClick={() => props.removeCharacter(props.id)} className="remove"></span> */}
     </div>
);

export default Card;