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
          <Route exact path="/" element={<Index />}/>
          <Route path="/all" element={<Index />}/>
          <Route path="/html" element={<Index />}/>
          <Route path="/photoshop" element={<Index />}/>
          <Route path="/wordpress" element={<Index />}/>
          <Route path="/mobile" element={<Index />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/resume" element={<Profile />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}
export default App;
