import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Worlds from "./pages/Worlds";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Worlds" element={<Worlds />} />
      </Routes>
    </div>
  );
}

export default App;
