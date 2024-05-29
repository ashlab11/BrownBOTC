import React from 'react';
import './header.css';
import brownlogo from "../../svgs/BrownLogo.png";
import botctext from "../../svgs/BOTCText.webp"
import searchicon from "../../svgs/SearchIcon.webp";

function Header() {
    return (
        <div className = "header-container">
            <div className = "brownlogo">
                <img src = {brownlogo} alt = "Brown Logo" />
            </div>
            <div className = "botctext">
                <img src = {botctext} alt = "BOTC Text" />
            </div>
            <div className = 'searchbar'>
                <img src = {searchicon} alt = "Search Icon" />
            </div>
        </div>
    );
}

export default Header;