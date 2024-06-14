import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from './components/PageNotFound';
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from './components/Contact';
function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navbar" element={<NavBar />} />
           <Route path="/home" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
