import React from "react";
import "./ScriptPage.css";

function ScriptPage( {scriptName, scriptImage} ) {
    return (
        <div className = 'character-page-container'>
            <h1>{{scriptName}}</h1>
            <div className = 'character-image'>
                <img src = {scriptImage} alt = "Character Image" />
            </div>
        </div>
    );
}
export default ScriptPage;