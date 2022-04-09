import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Nav extends Component {
    handleClick = () => {
        document.querySelector("nav ul").classList.toggle("show");
    }
    handleClick2 = () => {
        document.querySelector("nav ul").classList.remove("show");
    }
    render() {
        return (
            <nav>
                <div className="container">
                    <div className="logo">
                        <h2>ultra profile</h2>
                    </div>
                    <ul>
                        <li onClick={this.handleClick2}><Link to="/">home</Link></li>
                        <li onClick={this.handleClick2}><Link to="/work">work</Link></li>
                        <li onClick={this.handleClick2}><Link to="/portfolio">portfolio</Link></li>
                        <li onClick={this.handleClick2}><Link to="/resume">resume</Link></li>
                        <li onClick={this.handleClick2}><Link to="/about">about</Link></li>
                        <li onClick={this.handleClick2}><Link to="/contact">contact</Link></li>
                    </ul>
                    <div className="icon" onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;