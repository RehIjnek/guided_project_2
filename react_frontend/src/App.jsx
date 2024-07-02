import { useState, useEffect } from 'react'
import './App.css'
import CharacterList from './components/CharacterList'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <h1>SWAPI</h1>
        {/* <Routes>
                  <Route exact path="/" element={<Home data={data} handleDelete={handleDelete} page={page} setPage={setPage} />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/add" element={ */}
        <Routes>
          <Route
            exact path="/"
            render={routeProps => <CharacterList {...props} {...routeProps} />}
          />
          {/* <Route path="/films" element={<FilmsList />} />
        <Route path="/planets" element={<PlanetList/>} />
        <Route path="/planets/*" element={<Planet data={this.props.params.splat} />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
