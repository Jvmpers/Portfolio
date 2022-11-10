import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" element={<LandingPage />} />
{/*         <Route path="/*" element={<Header />} /> */}
        </Routes>
      </header>
    </div>
   </BrowserRouter>
  );
}

export default App;
