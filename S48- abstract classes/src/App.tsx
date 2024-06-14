import React from 'react';
import './App.css';
import Movie from './Components/Movie';
import Animal from './Classes/Animal';
import Lion from "./Classes/Animal";
function App() {

  let simha = new Lion();

  simha.breathingHabits();

  return (
    <div className="App">
      <header className="App-header">
        <Movie/>
        <Animal/>
      </header>
    </div>
  );
}
export default App;
