import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/timeline" element={<Timeline/>}/>
          <Route exact path="/skills" element={<Skills/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
