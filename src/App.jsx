import { useEffect, useState } from 'react'
import './App.css'
import Grid from './components/Grid'

function App(props) {

  const [giphyData, setGiphyData] = useState(null);
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs?api_key=2k0QNVSP1By7SAWJhixukFzzhRErrBXl&ids=cmIBKv6BpofWUPPmKU,TI4NWYIGY201td3R9R,17QQ2DIidrb5nXEexj,r1oZImRGo25pXnKqbs,InrV95avsV4gH78IPO,TCkYprBuDAgKAWvfIn,JTJKsyoTwi0a2cxL6P,kh3PAAIQygXH7AjJDJ,hDZrAfait45NFfL6m1,ZmYENgPVGN7tx7dF3K,ymfCaSMMv4FNorPHQ6,ZGgZyljBJSOg1zhy2f`, {mode: 'cors'})
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok', response);
      }
      return response.json();
    })
    .then(data => setGiphyData(data))
    .catch(error => console.error('Error:', error));
  
  }, [])

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
    seRecord: setSelectionRecord,
  }

  if (giphyData) {

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
        <Grid gifData={giphyData} allInfo={passObject}></Grid>
      </>
  
    )
  
  } else {

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
        <div>
          Loading...
        </div>
      </>  
    )

  }

}

export default App
