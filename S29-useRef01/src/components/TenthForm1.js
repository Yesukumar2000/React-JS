import React, { useRef, useState } from "react";

function TenthForm1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [totalMarks, setTotalMarks] = useState(0);
  const [showResults, setShowResults] = useState(false);

  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let englishInputRef = useRef();
  let teluguInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let scienceInputRef = useRef();
  let socialInputRef = useRef();

  const handleCalculate = () => {
    const englishMarks = Number(englishInputRef.current.value);
    const teluguMarks = Number(teluguInputRef.current.value);
    const hindiMarks = Number(hindiInputRef.current.value);
    const mathsMarks = Number(mathsInputRef.current.value);
    const scienceMarks = Number(scienceInputRef.current.value);
    const socialMarks = Number(socialInputRef.current.value);
    const totalMarks =
      englishMarks +
      teluguMarks +
      hindiMarks +
      mathsMarks +
      scienceMarks +
      socialMarks;
    setFirstName(firstNameInputRef.current.value);
    setLastName(lastNameInputRef.current.value);
    setTotalMarks(totalMarks);
    setShowResults(true);
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>English Marks</label>
          <input ref={englishInputRef}></input>
        </div>
        <div>
          <label>Telugu Marks</label>
          <input ref={teluguInputRef}></input>
        </div>
        <div>
          <label>Hindi Marks</label>
          <input ref={hindiInputRef}></input>
        </div>
        <div>
          <label>Maths Marks</label>
          <input ref={mathsInputRef}></input>
        </div>
        <div>
          <label>Science Marks</label>
          <input ref={scienceInputRef}></input>
        </div>
        <div>
          <label>Social Marks</label>
          <input ref={socialInputRef}></input>
        </div>
        <button
          type="button"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </form>
      {showResults && (
        <div>
          <h1>First Name: {firstName}</h1>
          <h1>Last Name: {lastName}</h1>
          <h1>Total Marks: {totalMarks}</h1>
        </div>
      )}
    </div>
  );
}

export default TenthForm1;
