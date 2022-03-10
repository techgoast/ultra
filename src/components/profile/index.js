import React, { Component } from "react";
import "./style.css";

class Profile extends Component {
    state = {
        skills: [
            {id:1, name:"Bootstrap", perc: 100},
            {id:2, name:"CSS3", perc: 90},
            {id:3, name:"Photoshop", perc:80}
        ]
    }
    componentDidMount() {
        document.querySelectorAll(".profile .skills .skill .progress").forEach(el => {
            el.style.width = el.dataset.width + "%";
        })
    }
    render() {
        const {skills} = this.state;
        const skillList = skills.map(skill => {
            return (
                <div className={skill.name} key={skill.id} >
                    <div className="show">
                        <p>{skill.name}</p>
                        <p>{skill.perc}%</p>
                    </div>
                    <div className="progress" data-width={skill.perc}></div>
                </div>
            )
        })
        return (
            <section className="profile">
                <div className="container">
                    <div className="data">
                        <h2>my profile</h2>
                        <div>
                            <h4>name</h4>
                            <p>khaled gouda</p>
                        </div>
                        <div>
                            <h4>birth date</h4>
                            <p>23/9/191</p>
                        </div>
                        <div>
                            <h4>address</h4>
                            <p>alexandria</p>
                        </div>
                        <div>
                            <h4>phone</h4>
                            <p>01553669007</p>
                        </div>
                        <div>
                            <h4>email</h4>
                            <p>techgoast@gmail.com</p>
                        </div>
                        <div>
                            <h4>website</h4>
                            <p><span>www.techgoast.com</span></p>
                        </div>
                    </div>
                    <div className="skills">
                        <h2>some skills</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti unde libero odit quod repudiandae distinctio placeat ab iure amet excepturi possimus rerum, blanditiis voluptatem omnis! Molestiae atque aliquam sed ea.</p>
                        <div className="skill">
                            {skillList}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Profile;