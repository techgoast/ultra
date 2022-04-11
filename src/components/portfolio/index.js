import React, { Component } from "react";
import "./style.css";
import axios from "axios";

class Portfolio extends Component {
    state = {
        portfolio: [],
        images: []
      }
      componentDidMount() {
        axios.all([
            axios.get("https://raw.githubusercontent.com/techgoast/ultra/master/public/data.json"),
            axios.get("https://api.github.com/repos/techgoast/ultra/contents/public/images/Portfolio?ref=master")
        ])
        .then(axios.spread((obj1, obj2) => {
        this.setState({
            portfolio:  obj1.data.portfolio,
            images: obj2.data
        })}))
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
        const portfolio = this.state.portfolio;
        const imags = this.state.images;
        const imageList = portfolio.map(item => {
            const imgno = item.id - 1;
            return (
                <div className={`image ${item.tech}`}  key={item.id}>
                    <div className="overlay"></div>
                    <img src={imags[imgno].download_url} alt=""/>
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