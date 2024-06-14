import React from 'react';
import './App.css';
import Cat from './Components/Cat';
import Cheetah from './Components/Cheetah';

function App() {  

  let myCat = new Cat();
  console.log(myCat.noOfLegs);
   myCat.foodHabits();
   console.log('------chirutha------')
  let chirutha = new Cheetah();
  console.log(chirutha.noOfEyes);
  chirutha.runningSpeed();
  chirutha.foodHabits();
  chirutha.interactionWithHuman();

  chirutha.calculateResult();
  
  return (
    <div className="App">
     <h1>Learning Inheritance, Polymorphism,Encapsulation,Composition</h1>
    </div>
  );
}

export default App;
