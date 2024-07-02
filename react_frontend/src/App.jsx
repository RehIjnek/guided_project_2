import { useState, useEffect } from 'react'
import './App.css'
import CharacterList from './components/CharacterList'

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
