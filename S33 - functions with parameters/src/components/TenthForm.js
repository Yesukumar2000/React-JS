import React, { useRef } from "react";
import "./TenthForm.css";

function TenthForm() {
  // Refs for input fields
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let englishInputRef = useRef();
  let teluguInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let scienceInputRef = useRef();
  let socialInputRef = useRef();

  // Refs for displaying grades
  let englishSpanRef = useRef();
  let teluguSpanRef = useRef();
  let hindiSpanRef = useRef();
  let mathsSpanRef = useRef();
  let scienceSpanRef = useRef();
  let socialSpanRef = useRef();

  // Refs for displaying results
  let resultParaRef = useRef();
  let percentageParaRef = useRef();

  // Function to get grade based on marks
  let getGrade = (marks) => {
    if (marks > 100) {
      return "💯 Out of Marks";
    } else if (marks >= 90) {
      return "💯 A Grade";
    } else if (marks >= 70) {
      return "🤩 B Grade";
    } else if (marks >= 50) {
      return "😎 C Grade";
    } else if (marks >= 40) {
      return "😚 D Grade";
    } else if (marks >= passMarks) {
      return "🙂 Pass";
    } else {
      return "❌ Fail";
    }
  };

  let passMarks = 30;
  // Function to calculate total marks and grades
  let calculateTotalMarks = () => {
    // Getting marks from input fields
    let englishMarks = Number(englishInputRef.current.value);
    let teluguMarks = Number(teluguInputRef.current.value);
    let hindiMarks = Number(hindiInputRef.current.value);
    let mathsMarks = Number(mathsInputRef.current.value);
    let scienceMarks = Number(scienceInputRef.current.value);
    let socialMarks = Number(socialInputRef.current.value);

    // Calculating total marks
    let totalMarks =
      englishMarks +
      teluguMarks +
      hindiMarks +
      mathsMarks +
      scienceMarks +
      socialMarks;

    // Displaying grades for each subject
    englishSpanRef.current.innerHTML = getGrade(englishMarks);
    teluguSpanRef.current.innerHTML = getGrade(teluguMarks);
    hindiSpanRef.current.innerHTML = getGrade(hindiMarks);
    mathsSpanRef.current.innerHTML = getGrade(mathsMarks);
    scienceSpanRef.current.innerHTML = getGrade(scienceMarks);
    socialSpanRef.current.innerHTML = getGrade(socialMarks);

    // Checking failed subjects
    let failedSubjects = [];
    if (englishMarks <= passMarks) failedSubjects.push("English");
    if (teluguMarks <= passMarks) failedSubjects.push("Telugu");
    if (hindiMarks <= passMarks) failedSubjects.push("Hindi");
    if (mathsMarks <= passMarks) failedSubjects.push("Maths");
    if (scienceMarks <= passMarks) failedSubjects.push("Science");
    if (socialMarks <= passMarks) failedSubjects.push("Social");

    // Displaying result
    if (
      englishMarks >= passMarks &&
      teluguMarks >= passMarks &&
      hindiMarks >= passMarks &&
      mathsMarks >= passMarks &&
      scienceMarks >= passMarks &&
      socialMarks >= passMarks
    ) {
      resultParaRef.current.innerHTML =
        "Congratulations! You are Passed All Subjects <br/>";
    } else {
      resultParaRef.current.innerHTML = `<br/>You are Failed in  (${failedSubjects}) Subjects. Better luck next time.<br/>`;
    }
    resultParaRef.current.innerHTML += `<br/>Name of the Student: ${firstNameInputRef.current.value} ${lastNameInputRef.current.value}<br/> <br/> TOTAL MARKS: ${totalMarks} <br/>`;
  };

  // Function to calculate average marks
  let calculatePercentage = () => {
    // Getting marks from input fields
    let englishMarks = Number(englishInputRef.current.value);
    let teluguMarks = Number(teluguInputRef.current.value);
    let hindiMarks = Number(hindiInputRef.current.value);
    let mathsMarks = Number(mathsInputRef.current.value);
    let scienceMarks = Number(scienceInputRef.current.value);
    let socialMarks = Number(socialInputRef.current.value);

    // Calculating total marks
    let totalMarks =
      englishMarks +
      teluguMarks +
      hindiMarks +
      mathsMarks +
      scienceMarks +
      socialMarks;

    // Calculating percentage of marks
    let maxTotalMarks = 100 * 6;
    let percentage = (totalMarks / maxTotalMarks) * 100;
    percentageParaRef.current.innerHTML = `Percentage : ${percentage.toFixed(
      0
    )}%`;
  };

  // Function to handle input field focus
  let inputOnFocus = (inputRef) => {
    inputRef.current.style.backgroundColor = "lightpink";
  };

  // Function to handle input field change
  let inputOnChange = (inputRef) => {
    inputRef.current.style.backgroundColor = "lightgreen";

    // Displays the grades excepts the Frist name input  and last name input
    if (inputRef !== firstNameInputRef && inputRef !== lastNameInputRef) {
      // Getting marks from the input field
      let marks = Number(inputRef.current.value);
      // update input
      inputRef.current.nextSibling.innerHTML = getGrade(marks);
    }
  };

  // Function to handle input field blur
  let inputOnBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "lightblue";
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
            ref={firstNameInputRef}
            onFocus={() => {
              inputOnFocus(firstNameInputRef);
            }}
            onChange={() => {
              inputOnChange(firstNameInputRef);
            }}
            onBlur={() => {
              inputOnBlur(firstNameInputRef);
            }}></input>
          <span></span>
        </div>
        <div>
          <label>Last Name</label>
          <input
            ref={lastNameInputRef}
            onFocus={() => {
              inputOnFocus(lastNameInputRef);
            }}
            onChange={() => {
              inputOnChange(lastNameInputRef);
            }}
            onBlur={() => {
              inputOnBlur(lastNameInputRef);
            }}></input>
          <span></span>
        </div>
        <div>
          <label>English Marks</label>
          <input
            ref={englishInputRef}
            onFocus={() => {
              inputOnFocus(englishInputRef);
            }}
            onChange={() => {
              inputOnChange(englishInputRef);
            }}
            onBlur={() => {
              inputOnBlur(englishInputRef);
            }}></input>
          <span ref={englishSpanRef}></span>
        </div>
        <div>
          <label>Telugu Marks</label>
          <input
            ref={teluguInputRef}
            onFocus={() => {
              inputOnFocus(teluguInputRef);
            }}
            onChange={() => {
              inputOnChange(teluguInputRef);
            }}
            onBlur={() => {
              inputOnBlur(teluguInputRef);
            }}></input>
          <span ref={teluguSpanRef}></span>
        </div>
        <div>
          <label>Hindi Marks</label>
          <input
            ref={hindiInputRef}
            onFocus={() => {
              inputOnFocus(hindiInputRef);
            }}
            onChange={() => {
              inputOnChange(hindiInputRef);
            }}
            onBlur={() => {
              inputOnBlur(hindiInputRef);
            }}></input>
          <span ref={hindiSpanRef}></span>
        </div>
        <div>
          <label>Maths Marks</label>
          <input
            ref={mathsInputRef}
            onFocus={() => {
              inputOnFocus(mathsInputRef);
            }}
            onChange={() => {
              inputOnChange(mathsInputRef);
            }}
            onBlur={() => {
              inputOnBlur(mathsInputRef);
            }}></input>
          <span ref={mathsSpanRef}></span>
        </div>
        <div>
          <label>Science Marks</label>
          <input
            ref={scienceInputRef}
            onFocus={() => {
              inputOnFocus(scienceInputRef);
            }}
            onChange={() => {
              inputOnChange(scienceInputRef);
            }}
            onBlur={() => {
              inputOnBlur(scienceInputRef);
            }}></input>
          <span ref={scienceSpanRef}></span>
        </div>
        <div>
          <label>Social Marks</label>
          <input
            ref={socialInputRef}
            onFocus={() => {
              inputOnFocus(socialInputRef);
            }}
            onChange={() => {
              inputOnChange(socialInputRef);
            }}
            onBlur={() => {
              inputOnBlur(socialInputRef);
            }}></input>
          <span ref={socialSpanRef}></span>
        </div>
        <div className="result-buttons">
          <button type="button" onClick={calculateTotalMarks}>
            Calculate
          </button>
          <button type="button" onMouseMove={calculatePercentage}>
            Calculate Percentage
          </button>
        </div>
      </form>
      <div className="result-Div">
        <p ref={resultParaRef}></p>
        <p ref={percentageParaRef}></p>
      </div>
    </div>
  );
}

export default TenthForm;
