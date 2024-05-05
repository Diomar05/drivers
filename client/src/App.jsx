import "./App.css";
import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Create from "./Components/Create/Create";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <>
    {location.pathname !== '/' && <Header />}
      <Routes>
        <Route exatc path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Create />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
