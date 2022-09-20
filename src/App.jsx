import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import Button from './components/Button'

const color = ['#8e3127','#8e5527','#8e6627','#858e27','#4a8e27','#278e43','#278e62','#27778e','#27538e','#28278e',
'#47278e','#74278e','#8e2785','#8e2761','#8e272f'
];

function App() {

  const getIndexRandom = array => {
    return Math.floor(Math.random() * array.length);
  }
  const catchElement = quotes[getIndexRandom(quotes)];
  const catchColor = color[getIndexRandom(color)];

  const [randomElement, setRandomElement] = useState(catchElement);
  const [randomColor, setRandomColor] = useState(catchColor);

  const getRandomAll = () => {
    setRandomElement(quotes[getIndexRandom(quotes)]);
    setRandomColor(color[getIndexRandom(color)]);  
  }
  return (
    <div style = {{backgroundColor: randomColor}} className="App">
      <QuoteBox 
      randomElement={randomElement}
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
    
    </div>
  )
}

export default App
