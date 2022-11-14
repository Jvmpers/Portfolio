import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Nav from './Components/Nav/Nav';
import AboutMe from './Components/AboutMe/AboutMe';
import MyTech from './Components/MyTech/MyTech';
import MyProjects from './Components/MyProjects/MyProjects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/tech" element={<MyTech />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/contact" element={<Contact />} />
        
{/*         <Route path="/*" element={<Header />} /> */}
        </Routes>
      </header>
    </div>
   </BrowserRouter>
  );
}

export default App;
