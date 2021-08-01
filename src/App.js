import './App.css';
import React, { useState }from 'react';

const App = () => {

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [random, setRandom] = useState(10);

  const randomFunc = () => {
    
    setRandom(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));

  }

  return (
    <div className="hero">
      <div className="container">
        <div className="randomNumber">
          <div>
            <span className="title">Random number :</span>
            <span style={{ color: "rgb(201, 113, 14)" }}> {random}</span>
          </div>
          <div className="numcontainer">
            <div>
              <p>Min :</p>
              <input
                type="number"
                className="inputNumber"
                value={minVal}
                onChange={e => setMinVal(e.target.value)}
              />
            </div>
            <div>
              <p>Max :</p>
              <input
                type="number"
                className="inputNumber"
                value={maxVal}
                onChange={e => setMaxVal(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button className="buttonRandom" onClick={randomFunc}>Get random number</button>
      </div>
    </div>
  );
}

export default App;