function App() {
  let numbers = [0, 1];

  // array Destructuring
  let [firstNumber, secondNumber, thirdNumber = 2] = numbers;
  console.log("array Destructuring:");
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(thirdNumber);

  // object Destructuring of Object
  let personalInfo = {
    name: "John",
    age: 22,
    gender: "Male",
    country: "India",
  };
  let { name: N, age: A, country: C } = personalInfo;

  console.log("Object Destructuring:", "Name-", N, "Age-", A, "Country-", C);

  //Spread Operator
  let johnInfo = {
    fristName: 'John',
    lastName: 'A',
    gender:'Male',
    nationality:'Indian'
  }
  let rahulInfo = {
    fristName: 'Rahul',
    lastName: 'b',
    gender:'Male',
    nationality:'Indian'
  }
  // Here using of spread Operator  in object
  let raju = {...rahulInfo}
  raju.fristName="Raju";
  raju.lastName="C";

  console.log('Spread Operator in Object');
  console.log(johnInfo,rahulInfo,raju);

 // Spread Operator
 let cars = ['RolesRoyal','Hyundai','Toyota','Mahindra Scorpio','Kia'];
 let bikes = ['Bajaj pulser','Royal Enfield Bullet','Apache','Ktm'];
 let vehicles = [...cars,...bikes];
  console.log('Spread Operator in Array',vehicles);

 //Rest parameter
let calculateBtechAllSemMarks = (...marks)=>{
  console.log(marks);
}
 calculateBtechAllSemMarks('Rest parameter-',200,300,400,500,600,700,800,900,1000);

  return (
    <div className="App">
      <h1>Output is Please check in console</h1>
    </div>
  );
}

export default App;
