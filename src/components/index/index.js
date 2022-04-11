import React , {Component}from "react";
import "./style.css";
import About from "../about";
import Home from "../home";
import Portfolio from "../portfolio";
import Profile from "../profile";
import Social from "../social";
import Work from "../work";



class Index extends Component {
  
  render() {
    return (
      <div className="index">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Social />
      </div>
    )
  }
}
export default Index;