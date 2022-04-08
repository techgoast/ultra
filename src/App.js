import React , {Component}from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/navbar";
import Index from "./components/index";
import Work from "./components/work";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Profile from "./components/profile";
import Contact from "./components/contact";
import Footer from "./components/footer";




class App extends Component {

  

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/ultra" element={<Index />}/>
          <Route path="/ultra/work" element={<Work />}/>
          <Route path="/ultra/portfolio" element={<Portfolio />}/>
          <Route path="/ultra/resume" element={<Profile />}/>
          <Route path="/ultra/about" element={<About />}/>
          <Route path="/ultra/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}
export default App;
