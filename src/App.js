import React  from "react";
import './App.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import CardSection from "./components/CardSection/CardSection";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <CardSection/>
    <Contact/>
    </div>
  );
}

export default App;
