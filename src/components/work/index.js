import React, { Component } from "react";
import "./style.css";
import axios from "axios";
class Work extends Component {
    state = {
        works: []
      }
      componentDidMount() {
        axios.get("https://raw.githubusercontent.com/techgoast/ultra/master/public/data.json")
        .then(res => {
            this.setState({
                works: res.data.works,
            });
        })
      }
    render() {
        const works = this.state.works;
        const workList = works.map(workItem => {
            return (
                <div className="item" key={workItem.id}>
                    <div className="icon"><i className={workItem.icon_name}></i></div>
                    <h4>{workItem.title}</h4>
                    <hr />
                    <p>{workItem.body}</p>
                </div>
            )
        })
        return (
            <section className="work">
                <div className="container">
                    <h2>my works</h2>
                    <div className="items">
                        {workList}
                    </div>
                </div>
            </section>
        )
    }
}

export default Work;