import { useEffect, useState } from "react";
import useStore from "./components/store";
import Home from "./pages/Home";
import Worlds from "./pages/Worlds";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";

function App() {
  const { characters, setCharacter, pageNumber, setPageNumber } = useStore();
  return (
    <div>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              characters={characters}
              setCharacter={setCharacter}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          }
        />
        <Route path="/Worlds" element={<Worlds />} />
      </Routes>
    </div>
  );
}

export default App;
