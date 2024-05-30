import React from "react";
import "./CharacterPage.css";

function CharacterPage( {characterName, characterImage} ) {
    return (
        <div className = 'character-page-container'>
            <h1>{characterName}</h1>
            <div className = 'in-play'>
                <h2>Games-in play:</h2>
                <p>12</p>
            </div>
            <div className = 'win-rate'>
                <h2>Win Rate:</h2>
                <p>50%</p>
            </div>
            <div className = 'commonly-play4ed'>
                <h2>Most commonly played by:</h2>
                <p>Eitan (2 games)</p>
            </div>

            <div className = 'last-played'>
                <h2>Last Played:</h2>
                <p>Game 12</p>
            </div>
            <div className = 'character-image'>
                <img src = {characterImage} alt = "Character Image" />
            </div>
        </div>
    );
}
export default CharacterPage;