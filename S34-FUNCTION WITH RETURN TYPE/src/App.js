import './App.css';

// Function to calculate total marks, percentage, and result
function calculateInterResults(english, sanskrit, maths, physics, chemistry) {
  // Calculate total marks
  let total = english + sanskrit + maths + physics + chemistry;
  // Define pass marks
  let passMarks = 35;
  // Calculate percentage
  let percentage = ((total / 600) * 100).toFixed(0) + '%';
  // Initialize result variable
  let result;

  // Check if all subjects meet pass marks criteria
  if (english >= passMarks && sanskrit >= passMarks && maths >= passMarks && physics >= passMarks && chemistry >= passMarks) {
    result = "Pass";
  } else {
    result = "Fail";
  }

  // Return an object with total marks, percentage, and result
  return { total, percentage, result };
}

function App() {

  // Calculate total marks for first and second year separately
  let firstYearTotalMarks = calculateInterResults(99, 88, 77, 66, 55);
  let secondYearTotalMarks = calculateInterResults(90, 80, 70, 60, 50);

  let interTotals = { firstYearTotalMarks, secondYearTotalMarks };

  console.log(interTotals);

  return (
    <div className="App">
      <h1>Please check in Console</h1>
    </div>
  );
}

export default App;
