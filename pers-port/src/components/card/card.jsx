import React from "react";
import './card.css';

function Card(prop) {
    return (
        <div className="card">
            <h1>{prop.name}</h1>
            <div className="proj-pic">
                <img src={prop.picture} alt={prop.name}/>
            </div>
            <h2>{prop.description}</h2>
            <div className="btn-container">
                <button><a href={prop.link}>View Repository</a></button>
            </div>
        </div>

    );
}

export default Card;