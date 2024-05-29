import React from "react";
import "./CharacterPage.css";

function CharacterPage( {characterName, characterImage} ) {
    return (
        <div className = 'character-page-container'>
            <h1>{characterName}</h1>
            <div className = 'character-image'>
                <img src = {characterImage} alt = "Character Image" />
            </div>
        </div>
    );
}
export default CharacterPage;