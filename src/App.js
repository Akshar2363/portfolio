import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Timeline from './pages/Timeline';


function App() {

 
  return (
    <div className={`App `}>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/portfolio/home" element={<Home/>}/>
          <Route exact path="/portfolio/about" element={<About/>}/>
          <Route exact path="/portfolio/timeline" element={<Timeline/>}/>
          <Route exact path="/portfolio/skills" element={<Skills/>}/>
          <Route exact path="/portfolio/projects" element={<Projects/>}/>
          <Route exact path="/portfolio/contact" element={<Contact/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
