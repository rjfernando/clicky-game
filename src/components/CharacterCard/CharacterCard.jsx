import React from "react";
import "./CharacterCard.css";


const CharacterCard = props => (
    <div
    style= {{
        cursor: "pointer",
    }}
    
    onClick={() => props.clickedCard(props.id)} className = "card">
    
        <div className = "img-container">
            <img className = "responsive-img" src = {props.image}/>
        
       </div>
    </div>


);

export default CharacterCard;

