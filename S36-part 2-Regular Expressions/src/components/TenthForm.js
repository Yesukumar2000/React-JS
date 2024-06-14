import React, { useRef } from "react";
import "./TenthForm.css";

function TenthForm() {
  // Refs for input fields
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();

  let emailInputRef = useRef();
  let passwordInputRef = useRef();

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

  let passMarks = 30;
  let maxTotalMarks = 100 * 6;

  // Refs for displaying results
  let resultParaRef = useRef();
  let percentageParaRef = useRef();

  //Span ref
  let firstNameSpanRef = useRef();
  let lastNameSpanRef = useRef();
  let emailSpanRef = useRef();
  let passwordSpanRef = useRef();

  // Regular expressions 
  let nameRegEx = /^[a-zA-Z\s]{2,15}$/;
  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

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
        "Congratulations! You have passed all subjects. <br/>";
    } else {
      resultParaRef.current.innerHTML = `<br/>You have failed in (${failedSubjects}) subjects. Better luck next time.<br/>`;
    }
    resultParaRef.current.innerHTML += `<br/>Name of the student: ${firstNameInputRef.current.value} ${lastNameInputRef.current.value}<br/> <br/> Total marks: ${totalMarks} / ${maxTotalMarks} <br/>`;
  };

  // Function to calculate percentage 
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
    let percentage = (totalMarks / maxTotalMarks) * 100;
    percentageParaRef.current.innerHTML = `Percentage : ${percentage.toFixed(
      0
    )}%`;
  };

  // Function to handle input field - focus
  let inputOnFocus = (inputRef) => {
    inputRef.current.style.backgroundColor = "lightpink";
  };

  // Function to handle input field - change
  let inputOnChange = (inputRef, spanRef) => {

    inputRef.current.style.backgroundColor = "lightgreen";

    // Validate email and password
    if (inputRef === emailInputRef) {
      validateEmail(emailInputRef, emailSpanRef);
    } else if (inputRef === passwordInputRef) {
      validatePassword(passwordInputRef, passwordSpanRef);
    } else {

      let marks = inputRef.current.value;
      if (marks >= 0 && marks <= 100) {
        spanRef.current.innerHTML = getGrade(marks);
        spanRef.current.style.backgroundColor= 'lightgreen';
      } else {
        spanRef.current.innerHTML = 'Invalid Input';
        spanRef.current.style.backgroundColor= 'orange';
      }
    }
  };

  // Function to validate name
  let validateName = (inputRef, spanRef) => {
    let result = nameRegEx.test(inputRef.current.value);
    if (result === true) {
      spanRef.current.innerHTML = 'Valid';
    } else {
      spanRef.current.innerHTML = 'Invalid';
      spanRef.current.style.backgroundColor= 'orange';

    }
  };

  // Function to validate email
  let validateEmail = (inputRef, spanRef) => {
    let result = emailRegEx.test(inputRef.current.value);
    if (result === true) {
      spanRef.current.innerHTML = 'Valid';
    } else {
      spanRef.current.innerHTML = 'Invalid Email';
      spanRef.current.style.backgroundColor= 'orange';

    }
  };

  // Function to validate password
  let validatePassword = (inputRef, spanRef) => {
    let result = passwordRegEx.test(inputRef.current.value);
    if (result === true) {
      spanRef.current.innerHTML = 'Valid';
    } else {
      spanRef.current.innerHTML = 'InValid Password';
      spanRef.current.style.backgroundColor = 'orange';
    }
  };

  // Function to handle input field - blur
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
              inputOnChange(firstNameInputRef, firstNameSpanRef);
              validateName(firstNameInputRef, firstNameSpanRef);
            }}
            onBlur={() => {
              inputOnBlur(firstNameInputRef);
            }}
          />
          <span ref={firstNameSpanRef}></span>
        </div>
        <div>
          <label>Last Name</label>
          <input
            ref={lastNameInputRef}
            onFocus={() => {
              inputOnFocus(lastNameInputRef);
            }}
            onChange={() => {
              inputOnChange(lastNameInputRef,lastNameSpanRef);
              validateName(lastNameInputRef, lastNameSpanRef);
            }}
            onBlur={() => {
              inputOnBlur(lastNameInputRef);
            }}
          />
          <span ref={lastNameSpanRef}></span>
        </div>
        <div>
          <label>Email</label>
          <input
            ref={emailInputRef}
            onFocus={() => {
              inputOnFocus(emailInputRef);
            }}
            onChange={() => {
              inputOnChange(emailInputRef,emailSpanRef);
              validateEmail(emailInputRef, emailSpanRef);
            }}
            onBlur={() => {
              inputOnBlur(emailInputRef);
            }}
          />
          <span ref={emailSpanRef}></span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            ref={passwordInputRef}
            onFocus={() => {
              inputOnFocus(passwordInputRef);
            }}
            onChange={() => {
              inputOnChange(passwordInputRef, passwordSpanRef);
            }}
            onBlur={() => {
              inputOnBlur(passwordInputRef);
            }}
          />
          <span ref={passwordSpanRef}></span>
        </div>
        <div>
          <label>English Marks</label>
          <input
            ref={englishInputRef}
            onFocus={() => {
              inputOnFocus(englishInputRef);
            }}
            onChange={() => {
              inputOnChange(englishInputRef, englishSpanRef);
            }}
            onBlur={() => {
              inputOnBlur(englishInputRef);
            }}
          />
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
              inputOnChange(teluguInputRef, teluguSpanRef);
            }}
            onBlur={() => {
              inputOnBlur(teluguInputRef);
            }}
          />
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
              inputOnChange(hindiInputRef, hindiSpanRef);
            }}
            onBlur={() => {
              inputOnBlur(hindiInputRef);
            }}
          />
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
              inputOnChange(mathsInputRef, mathsSpanRef);
            }}
            onBlur={() => {
              inputOnBlur(mathsInputRef);
            }}
          />
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
              inputOnChange(scienceInputRef, scienceSpanRef);
            }}
            onBlur={() => {
              inputOnBlur(scienceInputRef);
            }}
          />
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
              inputOnChange(socialInputRef, socialSpanRef);
            }}
            onBlur={() => {
              inputOnBlur(socialInputRef);
            }}
          />
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
