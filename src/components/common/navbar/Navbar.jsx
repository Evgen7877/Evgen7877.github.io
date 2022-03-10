import React from "react";
import { NavLink } from "react-router-dom";

import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <li><NavLink to='/list_leagues' className="navbar__item">Список лиг</NavLink></li>
            <li><NavLink to='/calendar_leagues' className="navbar__item">Календарь лиги</NavLink></li>
            <li><NavLink to='/command_list' className="navbar__item">Список команд</NavLink></li>
            <li><NavLink to='/one_team_calendar' className="navbar__item">Календарь одной команды</NavLink></li>
        </nav>
    );

}

export default Navbar;
