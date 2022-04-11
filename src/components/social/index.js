import axios from "axios";
import React, { Component } from "react";
import "./style.css";

class Social extends Component {
    state = {
        social: []
    }

    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/techgoast/ultra/master/public/data.json")
        .then(res => {this.setState({
            social: res.data.social
        })})
    }

    render() {
        const {social} = this.state;
        const socialList = social.map(item => {
            return (
                <div className={item.name} key={item.id}>
                    <div className="icon">
                        <i className={item.icon}></i>
                    </div>
                    <div className="text">
                        <p>{item.title}</p>
                        <p>{item.body}</p>
                    </div>
                </div>
            )
        })
        return (
            <section className="social">
                {socialList}
            </section>
        )
    }
}

export default Social;