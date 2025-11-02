import React from "react";
import "./navbar.css";

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-cont">
                <div className="links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#extra">Photos</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;