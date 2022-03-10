import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <h2>ultra profile</h2>
                </div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/work">work</Link></li>
                    <li><Link to="/portfolio">portfolio</Link></li>
                    <li><Link to="/resume">resume</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;