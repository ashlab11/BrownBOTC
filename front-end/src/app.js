import Header from './components/header.js'; // Adjust path as necessary
import CharacterPage from "./pages/CharacterPage.js"; // Make sure the path is correct
import PlayerPage from './pages/PlayerPage.js';
import GamePage from './pages/GamePage.js';
import ScriptPage from './pages/ScriptPage.js';


import React, {useState} from 'react';
import './app.css';

function App() {
  // CurrentPage controls what type of page the user is on
  const [currentPage, setCurrentPage] = useState("CharacterPage"); // ["CharacterPage", "PlayerPage", "GamePage", "ScriptPage"

  // All these controls what specific object (character/game/script) the user is currently viewing -- false if not viewing that type of page
  const [currentCharacter, setCurrentCharacter] = useState("Assassin");
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [currentGame, setCurrentGame] = useState(false);
  const [currentScript, setCurrentScript] = useState(false);

  const pageInfo = {
    name: "Acrobat",
    imageUrl: "https://wiki.bloodontheclocktower.com/images/b/b5/Icon_acrobat.png"
  };

  const playerInfo = {
    name: "Asher", 
    imageUrl: NaN
  }

  const gameInfo = {
    name: "Game 1",
    imageUrl: NaN
  }

  const scriptInfo = {
    name: "Script 1",
    imageUrl: NaN
  }


  function renderPage(currentPage, pageInfo) {
    switch (currentPage) {
        case "CharacterPage":
            return <CharacterPage characterName={pageInfo.name} characterImage={pageInfo.imageUrl} />;
        case "PlayerPage":
            return <PlayerPage />;
        case "GamePage":
            return <GamePage />;
        case "ScriptPage":
            return <ScriptPage />;
        default:
            return null;  // Null Component for when the player somehow clicks on an unusable page
    }
  }

  return (
    <div>
      <Header />
      {renderPage(currentPage, pageInfo)};
    </div>
  );
}

export default App;