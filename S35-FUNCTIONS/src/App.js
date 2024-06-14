// import React, { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     console.log(' useEffect - inside onload');
//   }, []);
//   let sachinDetails = {
//     name: "Sachin",
//     age: 55,
//     engMarks: 91,
//     telMarks: 92,
//     hindiMarks: 93,
//     mathsMarks: 94,
//     sciMarks: 95,
//     socMarks: 96,
//   };
//   let kohliDetails = {
//     name: "Virat Kohli",
//     age: 41,
//     engMarks: 91,
//     telMarks: 92,
//     hindiMarks: 93,
//     mathsMarks: 94,
//     sciMarks: 95,
//     socMarks: 96,
//   };

//   console.log(sachinDetails.name);
//   console.log(kohliDetails);

//   let dhoniDetail = ["MS Dhoni", 41, 99, 88, 55, 77, 66, 22];

//   console.log(dhoniDetail[0]);

//   var calculateResult = (
//     engMarks,
//     telMarks,
//     hindiMarks,
//     mathsMarks,
//     sciMarks,
//     socMarks,
//     studentName,
//     passFn,
//     failFn,
//   ) => {
//     let passMarks = 35;
//     if (
//       engMarks >= passMarks &&
//       telMarks >= passMarks &&
//       hindiMarks >= passMarks &&
//       mathsMarks >= passMarks &&
//       sciMarks >= passMarks &&
//       socMarks >= passMarks
//     ) {
//       console.log(`${studentName} Passed in tenth`);
//       passFn();
//     } else {
//       console.log(`${studentName} Failed in tenth`);
//       failFn();
//     }
//   };

//   calculateResult(
//     99,
//     88,
//     77,
//     60,
//     95,
//     44,
//     'Kumar',
//     () => {
//       console.log('inside pass Function');
//     },
//     () => {
//       console.log('inside fail Function');
//     }
//   );
//   calculateResult(
//     66,
//     88,
//     77,
//     29,
//     71,
//     44,
//     'John',
//     () => {
//       console.log('inside pass Function');
//     },
//     () => {
//       console.log('inside fail Function');
//     }
//   );

//   let studentsDetails = {sachinDetails,kohliDetails,dhoniDetail}

//     console.log(studentsDetails.dhoniDetail[0]);
//     console.log(studentsDetails.kohliDetails.name);
//     console.log(studentsDetails.sachinDetails.name);

//   return (
//     <div>
//       <h1>Output</h1>
//       <p>Check console for detailed output</p>
//     </div>
//   );
// }

// export default App;


import TenthForm from './components/TenthForm.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Student MarksList</h1>
      <TenthForm />
    </div>
  );
}

export default App;