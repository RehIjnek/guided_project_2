import { useState, useEffect } from 'react'
import './App.css'
import CharacterList from './components/CharacterList'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Character from "./components/Character";
import Planet from "./components/Planet";
import Film from "./components/Film";

function App() {

  return (
    <>
      <Router>
        <h1>SWAPI</h1>
        <Routes>
          <Route path="/characters/:id" element={<Character />} />
          <Route path="/" element={<CharacterList />} />
          <Route path="/films/:id" element={<Film />} />
          <Route path="/planets/:id" element={<Planet />} />
        </Routes>
      </Router>
=======

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <CharacterList />
    </>
  )
}

export default App
