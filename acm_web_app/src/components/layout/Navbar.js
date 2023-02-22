import React from "react";
import {NavLink} from 'react-router-dom'

export default function Navbar(){

    return(
        <div className = "navbar">
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul className="navbar--items">
                <li><NavLink to ="/"> HOME </NavLink></li>
                <li><NavLink to="/stuff"> ACADEMICS </NavLink></li>
                <li><NavLink to="/currentEvents"> CURRENT EVENTS </NavLink></li>
                <li><NavLink to="/executiveMem"> EXECUTIVE MEMBERS </NavLink></li>
                <li><NavLink to="/admin">ADMIN</NavLink></li>
            </ul>
        </div>
    )

}