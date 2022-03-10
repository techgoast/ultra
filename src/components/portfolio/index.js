import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import axios from "axios";

class Portfolio extends Component {
    state = {
        portfolio: []
    }
    componentDidMount() {
        axios.get("js/data.json")
        .then(res => {this.setState({portfolio:res.data.portfolio})});
    }
    render() {
        const {portfolio} = this.state;
        const imageList = portfolio.map(item => {
            return (
                <div className="image" key={item.id}>
                    <div className="overlay"></div>
                    <img src={item.image} alt=""/>
                    <button>show image</button>
                </div>
            )
        })
        return (
            <section className="portfolio">
                <div className="container">
                    <h2>my portfolio</h2>
                    <div className="links">
                        <NavLink to="/all">all</NavLink>
                        <NavLink to="/hTML">hTML</NavLink>
                        <NavLink to="/photoshop">photoshop</NavLink>
                        <NavLink to="/wordpress">wordpress</NavLink>
                        <NavLink to="/mobile">mobile</NavLink>
                    </div>
                </div>
                <div className="images">
                    {imageList}
                </div>
            </section>
        )
    }
}

export default Portfolio;