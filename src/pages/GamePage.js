import React from "react";
import "./GamePage.css";

function GamePage( {gameNum, gameImage} ) {
    return (
        <div className = 'character-page-container'>
            <h1>{{gameNum}}</h1>
            <div className = 'character-image'>
                <img src = {gameImage} alt = "Character Image" />
            </div>
        </div>
    );
}
export default GamePage;