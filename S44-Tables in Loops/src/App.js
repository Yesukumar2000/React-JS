import React, { useState } from 'react';
import './App.css';

function App() {
  let [result, setResult] = useState('');
  let [showResult, setShowResult] = useState(false);

  let handleClick = () => {
    let newResult = '';
    for (let i = 1; i <= 1000; i++) {
      if (i === 555 || i === 567 || i === 678 || i === 777 || i === 893) {
        continue;
      }
      for (let j = 1; j <= 100; j++) {
        if (j === 21 || j === 46 || j === 63 || j === 78 || j === 83) {
          continue;
        }
        newResult += `${i}*${j}=${i * j}\n`;
      }
    }
    setResult(newResult);
    setShowResult(true);
  };

  return (
    <div className="container">
      <button onClick={handleClick}>Click the Button</button>
      {showResult && <div className="result"><pre>
      {result}</pre></div>}
    </div>
  );
}

export default App;
