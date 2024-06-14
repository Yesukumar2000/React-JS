import { useState } from 'react';
import './App.css';
import FCCounter from './Components/FCCounter';
import CCCounter from './Components/CCCounter';

function App() {
  let [show,setShow]= useState(true);

  return (
    <div className="App">
      <br></br>

      <button onClick={()=>{
        if(show === true){
          setShow(false);
        }else{
          setShow(true);
        }
      }}>Toggle Show</button>
      <br></br>
      <br></br>
      {show === true ?<FCCounter/>:null}
      {show === true ?<CCCounter/>:null}
    </div>
  );
}

export default App;
