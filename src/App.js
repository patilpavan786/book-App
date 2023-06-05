import React from "react"
import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from "./Page/Home/Home";
import About from "./Page/About/About";

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
