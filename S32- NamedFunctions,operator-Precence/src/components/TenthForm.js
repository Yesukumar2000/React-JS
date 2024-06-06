import React, { useRef } from "react";
import "./TenthForm.css";

function TenthForm() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let englishInputRef = useRef();
  let teluguInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let scienceInputRef = useRef();
  let socialInputRef = useRef();

  let resultParaRef = useRef();
  let averageParaRef = useRef();

  let englishSpanRef = useRef();
  let teluguSpanRef = useRef();
  let hindiSpanRef = useRef();
  let mathsSpanRef = useRef();
  let scienceSpanRef = useRef();
  let socialSpanRef = useRef();
  
  let getGrade = (marks) => {
    if (marks >= 100) {
      return "Maximum Marks 💯 only";
    } else if (marks >= 86) {
      return "Outstanding Marks 🤩 ";
    } else if (marks >= 66) {
      return "Excellent Marks 😎";
    } else if (marks >= 51) {
      return "Great Marks 🙂";
    } else if (marks >= 46) {
      return "Good Marks 🙁";
    } else if (marks >= 36) {
      return "Better Marks 🙄";
    } else if (marks >= 31) {
      return "Pass 🙁";
    } else {
      return "Fail  😞";
    }
  };


  let calculateTotalMarks = () => {
    let englishMarks = Number(englishInputRef.current.value);
    let teluguMarks = Number(teluguInputRef.current.value);
    let hindiMarks = Number(hindiInputRef.current.value);
    let mathsMarks = Number(mathsInputRef.current.value);
    let scienceMarks = Number(scienceInputRef.current.value);
    let socialMarks = Number(socialInputRef.current.value);
    
  

    let totalMarks =
      englishMarks +
      teluguMarks +
      hindiMarks +
      mathsMarks +
      scienceMarks +
      socialMarks;

    englishSpanRef.current.innerHTML = getGrade(englishMarks);
    teluguSpanRef.current.innerHTML = getGrade(teluguMarks);
    hindiSpanRef.current.innerHTML = getGrade(hindiMarks);
    mathsSpanRef.current.innerHTML = getGrade(mathsMarks);
    scienceSpanRef.current.innerHTML = getGrade(scienceMarks);
    socialSpanRef.current.innerHTML = getGrade(socialMarks);



    let failedSubjects = [];

    // Check each subject's marks
    if (englishMarks <= 35) {
      failedSubjects.push("English");
    }
    if (teluguMarks <= 35) {
      failedSubjects.push("Telugu");
    }
    if (hindiMarks <= 35) {
      failedSubjects.push("Hindi");
    }
    if (mathsMarks <= 35) {
      failedSubjects.push("Maths");
    }
    if (scienceMarks <= 35) {
      failedSubjects.push("Science");
    }
    if (socialMarks <= 35) {
      failedSubjects.push("Social");
    }
  
    // if ( === 0) {
    if (englishMarks >= 35  &&  teluguMarks >= 35 && hindiMarks >= 35 &&  mathsMarks >= 35 && scienceMarks >= 35 &&  socialMarks >= 35 ) {
      resultParaRef.current.innerHTML = "Congratulations! All subjects are passed.<br/>";
    } else {
      resultParaRef.current.innerHTML = `<br/>Failed Subjects are (${failedSubjects}). Better luck next time.<br/>`;
    }
    resultParaRef.current.innerHTML += `<br/> TOTAL MARKS of ${firstNameInputRef.current.value} and ${lastNameInputRef.current.value} are ${totalMarks} <br/>`;
   
  };

  let calculateAverageMarks = () => {
    let englishMarks = Number(englishInputRef.current.value);
    let teluguMarks = Number(teluguInputRef.current.value);
    let hindiMarks = Number(hindiInputRef.current.value);
    let mathsMarks = Number(mathsInputRef.current.value);
    let scienceMarks = Number(scienceInputRef.current.value);
    let socialMarks = Number(socialInputRef.current.value);

    let totalMarks =
      englishMarks +
      teluguMarks +
      hindiMarks +
      mathsMarks +
      scienceMarks +
      socialMarks;

    let averageMarks = totalMarks / 6;

    averageParaRef.current.innerHTML = `AVERAGE MARKS are ${averageMarks.toFixed(
      2
    )}`;
  };
  
 

  //frist name
  let fristNameOnFocus = () => {
    firstNameInputRef.current.style.backgroundColor = "lightpink";
    console.log(firstNameInputRef, "-onFocus is lightpink");
  };
  let fristNameOnChange = () => {
    firstNameInputRef.current.style.backgroundColor = "lightgreen";
    console.log(firstNameInputRef, "-onChange is lightgreen");
  };
  let fristNameOnBlur = () => {
    firstNameInputRef.current.style.backgroundColor = "lightblue";
    console.log(firstNameInputRef, "-onBlur is lightblue");
  };
  //last name
  let lastNameOnFocus = () => {
    lastNameInputRef.current.style.backgroundColor = "lightpink";
    console.log(lastNameInputRef, "-onFocus is lightpink");
  };
  let lastNameOnChange = () => {
    lastNameInputRef.current.style.backgroundColor = "lightgreen";
    console.log(lastNameInputRef, "-onChange is lightgreen");
  };
  let lastNameOnBlur = () => {
    lastNameInputRef.current.style.backgroundColor = "lightblue";
    console.log(lastNameInputRef, "-onBlur is lightblue");
  };
  // English subject
  let englishOnFocus = () => {
    englishInputRef.current.style.backgroundColor = "lightpink";
    console.log(englishInputRef, "-onFocus is lightpink");
  };
  let englishOnChange = () => {
    let marks = englishInputRef.current.value;
    englishSpanRef.current.innerHTML = getGrade(marks);
    englishInputRef.current.style.backgroundColor = "lightgreen";
    console.log(englishInputRef, "-onChange is lightgreen");
  };
  let englishOnBlur = () => {
    englishInputRef.current.style.backgroundColor = "lightblue";
    console.log(englishInputRef, "-onBlur is lightblue");
  };
  // Telugu subject
  let teluguOnFocus = () => {
    teluguInputRef.current.style.backgroundColor = "lightpink";
    console.log(teluguInputRef, "-onFocus is lightpink");
  };
  let teluguOnChange = () => {
    let marks = teluguInputRef.current.value;
    teluguSpanRef.current.innerHTML = getGrade(marks);
    teluguInputRef.current.style.backgroundColor = "lightgreen";
    console.log(teluguInputRef, "-onChange is lightgreen");
  };
  let teluguOnBlur = () => {
    teluguInputRef.current.style.backgroundColor = "lightblue";
    console.log(teluguInputRef, "-onBlur is lightblue");
  };
  // Hindi subject
  let hindiOnFocus = () => {
    hindiInputRef.current.style.backgroundColor = "lightpink";
    console.log(hindiInputRef, "-onFocus is lightpink");
  };
  let hindiOnChange = () => {
    let marks = hindiInputRef.current.value;
    hindiSpanRef.current.innerHTML = getGrade(marks);
    hindiInputRef.current.style.backgroundColor = "lightgreen";
    console.log(hindiInputRef, "-onChange is lightgreen");
  };
  let hindiOnBlur = () => {
    hindiInputRef.current.style.backgroundColor = "lightblue";
    console.log(englishInputRef, "-onBlur is lightblue");
  };
  // Maths subject
  let mathsOnFocus = () => {
    mathsInputRef.current.style.backgroundColor = "lightpink";
    console.log(mathsInputRef, "-onFocus is lightpink");
  };
  let mathsOnChange = () => {
    let marks = mathsInputRef.current.value;
    mathsSpanRef.current.innerHTML = getGrade(marks);
    mathsInputRef.current.style.backgroundColor = "lightgreen";
    console.log(mathsInputRef, "-onChange is lightgreen");
  };
  let mathsOnBlur = () => {
    mathsInputRef.current.style.backgroundColor = "lightblue";
    console.log(mathsInputRef, "-onBlur is lightblue");
  };
  // Science subject
  let scienceOnFocus = () => {
    scienceInputRef.current.style.backgroundColor = "lightpink";
    console.log(scienceInputRef, "-onFocus is lightpink");
  };
  let scienceOnChange = () => {
    let marks = scienceInputRef.current.value;
    scienceSpanRef.current.innerHTML = getGrade(marks);
    scienceInputRef.current.style.backgroundColor = "lightgreen";
    console.log(scienceInputRef, "-onChange is lightgreen");
  };
  let scienceOnBlur = () => {
    scienceInputRef.current.style.backgroundColor = "lightblue";
    console.log(scienceInputRef, "-onBlur is lightblue");
  };
  // Social subject
  let socialOnFocus = () => {
    socialInputRef.current.style.backgroundColor = "lightpink";
    console.log(socialInputRef, "-onFocus is lightpink");
  };
  let socialOnChange = () => {
    let marks = socialInputRef.current.value;
    socialSpanRef.current.innerHTML = getGrade(marks);
    socialInputRef.current.style.backgroundColor = "lightgreen";
    console.log(socialInputRef, "-onChange is lightgreen");
  };
  let socialOnBlur = () => {
    socialInputRef.current.style.backgroundColor = "lightblue";
    console.log(socialInputRef, "-onBlur is lightblue");
  };


  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
            ref={firstNameInputRef}
            onFocus={fristNameOnFocus}
            onChange={fristNameOnChange}
            onBlur={fristNameOnBlur}></input>
          <span></span>
        </div>
        <div>
          <label>Last Name</label>
          <input
            ref={lastNameInputRef}
            onFocus={lastNameOnFocus}
            onChange={lastNameOnChange}
            onBlur={lastNameOnBlur}></input>
          <span></span>
        </div>
        <div>
          <label>English Marks</label>
          <input
            ref={englishInputRef}
            onFocus={englishOnFocus}
            onChange={englishOnChange}
            onBlur={englishOnBlur}></input>
          <span ref={englishSpanRef}></span>
        </div>
        <div>
          <label>Telugu Marks</label>
          <input
            ref={teluguInputRef}
            onFocus={teluguOnFocus}
            onChange={teluguOnChange}
            onBlur={teluguOnBlur}></input>
          <span ref={teluguSpanRef}></span>
        </div>
        <div>
          <label>Hindi Marks</label>
          <input
            ref={hindiInputRef}
            onFocus={hindiOnFocus}
            onChange={hindiOnChange}
            onBlur={hindiOnBlur}></input>
          <span ref={hindiSpanRef}></span>
        </div>
        <div>
          <label>Maths Marks</label>
          <input
            ref={mathsInputRef}
            onFocus={mathsOnFocus}
            onChange={mathsOnChange}
            onBlur={mathsOnBlur}></input>
          <span ref={mathsSpanRef}></span>
        </div>
        <div>
          <label>Science Marks</label>
          <input
            ref={scienceInputRef}
            onFocus={scienceOnFocus}
            onChange={scienceOnChange}
            onBlur={scienceOnBlur}></input>
          <span ref={scienceSpanRef}></span>
        </div>
        <div>
          <label>Social Marks</label>
          <input
            ref={socialInputRef}
            onFocus={socialOnFocus}
            onChange={socialOnChange}
            onBlur={socialOnBlur}></input>
          <span ref={socialSpanRef}></span>
        </div>
        <button type="button" onMouseMove={calculateTotalMarks}
          onClick={()=>{
            let precedence = (2 + 8) * 2 / 100;
            console.log('Operator Precedence',precedence)
           }}
        >
          Calculate
        </button>
        <button type="button" onClick={calculateAverageMarks}>
          Calculate Average
        </button>
      </form>
      <div className="result-Div">
        <p ref={resultParaRef}></p>
        <p ref={averageParaRef}></p>
      </div>
    </div>
  );
}

export default TenthForm;
