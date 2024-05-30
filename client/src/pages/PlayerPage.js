import React from "react";
import "./PlayerPage.css";

function PlayerPage( {playerName, playerImage} ) {
    return (
        <div className = 'character-page-container'>
            <h1>{{playerName}}</h1>
            <div className = 'character-image'>
                <img src = {playerImage} alt = "Character Image" />
            </div>
        </div>
    );
}
export default PlayerPage;