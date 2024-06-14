import React from 'react';
import './App.css';
import TenthStudent from './Components/TenthStudent';
import SSSCStudent from './Components/Classes/SSCStudent'; 

function App() {  
  return (
    <div className="App">
      <SSSCStudent
        name='Dhoni'
        englishMarks='85'
        teluguMarks='75'
        hindiMarks='80'
        mathsMarks='90'
        scienceMarks='85'
        socialMarks='95'
      />
      <TenthStudent
        name='Virat '
        englishMarks='90'
        teluguMarks='80'
        hindiMarks='85'
        mathsMarks='95'
        scienceMarks='90'
        socialMarks='85'
      />
      <TenthStudent
        name='Sachin '
        englishMarks='95'
        teluguMarks='90'
        hindiMarks='85'
        mathsMarks='80'
        scienceMarks='90'
        socialMarks='95'
      />
    </div>
  );
}

export default App;
