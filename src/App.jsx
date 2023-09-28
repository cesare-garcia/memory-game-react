import { useState } from 'react'
import './App.css'
import Grid from './components/Grid'

function App() {
  
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectionRecord, setSelectionRecord] = useState({
    paul: false,
    leto: false,
    jessica: false,
    duncan: false,
    gurney: false,
    baron: false,
    raban: false,
    chani: false,
    stilgar: false,
    irulan: false,
    feyd: false,
    margot: false
  });

  const passObject = {
    cScore: currentScore,
    bScore: bestScore,
    cSet: setCurrentScore,
    bSet: setBestScore,
    sRecord: selectionRecord,
    seRecord: setSelectionRecord
  }



  return (
    <>
      <header>
        <div className="topBar">
          <h1>Dune Memory Game</h1>
          <div>
            <p>Current Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
          </div>
        </div>
        <p>Get points by clicking on an image, but do not click on any more than once!</p>
      </header>
      <Grid allInfo={passObject}></Grid>
    </>

  )
}

export default App
