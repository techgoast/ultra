import React, { Component } from "react";
import "./style.css";
import axios from "axios";

class Portfolio extends Component {
    state = {
        portfolio: []
    }
    componentDidMount() {
        axios.get("data.json")
        .then(res => {
            this.setState({
                portfolio: res.data.portfolio
            });
        })
    }
    handleClick = (e) => {
        document.querySelectorAll(".portfolio .links span").forEach(span => {
            span.classList.remove("active");
        });
        e.target.classList.add("active");
        document.querySelectorAll(".portfolio .images .image").forEach(item => {
            item.style.display = "none";
            e.target.dataset.goal === "all" ? item.style.display = "block" : item.classList.contains(e.target.dataset.goal) ? item.style.display = "block" : item.style.display = "none";
        });
    }
    render() {
        const {portfolio} = this.state;
        const imageList = portfolio.map(item => {
            return (
                <div className={`image ${item.tech}`}  key={item.id}>
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
                        <span className="link" data-goal="all" onClick={this.handleClick}>all</span>
                        <span className="link" data-goal="html" onClick={this.handleClick}>hTML</span>
                        <span className="link" data-goal="photoshop" onClick={this.handleClick}>photoshop</span>
                        <span className="link" data-goal="wordpress" onClick={this.handleClick}>wordpress</span>
                        <span className="link" data-goal="mobile" onClick={this.handleClick}>mobile</span>
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