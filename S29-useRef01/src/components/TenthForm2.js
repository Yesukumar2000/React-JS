import React, { useRef } from "react";

function TenthForm2() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const englishInputRef = useRef();
  const teluguInputRef = useRef();
  const hindiInputRef = useRef();
  const mathsInputRef = useRef();
  const scienceInputRef = useRef();
  const socialInputRef = useRef();

  const resultParaRef = useRef();

  const getGrade = (marks) =>
  marks >= 100
    ? "Maximum Marks 100 only"
    : marks >= 86
    ? "Outstanding Marks"
    : marks >= 66
    ? "Excellent Marks"
    : marks >= 51
    ? "Very Good Marks"
    : marks >= 46
    ? "Good Marks"
    : marks >= 36
    ? "Better Marks"
    : marks >= 31
    ? "Pass"
    : "Fail";

   
  const calculateTotalMarks = () => {
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

    englishSpanRef.current.innerHTML = getGrade(englishMarks);
    teluguSpanRef.current.innerHTML = getGrade(teluguMarks);
    hindiSpanRef.current.innerHTML = getGrade(hindiMarks);
    mathsSpanRef.current.innerHTML = getGrade(mathsMarks);
    scienceSpanRef.current.innerHTML = getGrade(scienceMarks);
    socialSpanRef.current.innerHTML = getGrade(socialMarks);

    resultParaRef.current.innerHTML = `TOTAL MARKS of ${firstNameInputRef.current.value} and ${lastNameInputRef.current.value} are ${totalMarks}`;
  };

  let englishSpanRef = useRef();
  let teluguSpanRef = useRef();
  let hindiSpanRef = useRef();
  let mathsSpanRef = useRef();
  let scienceSpanRef = useRef();
  let socialSpanRef = useRef();

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input ref={firstNameInputRef}></input>
          <span></span>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputRef}></input>
          <span></span>
        </div>
        <div>
          <label>English Marks</label>
          <input ref={englishInputRef}></input>
          <span ref={englishSpanRef}></span>
        </div>
        <div>
          <label>Telugu Marks</label>
          <input ref={teluguInputRef}></input>
          <span ref={teluguSpanRef}></span>
        </div>
        <div>
          <label>Hindi Marks</label>
          <input ref={hindiInputRef}></input>
          <span ref={hindiSpanRef}></span>
        </div>
        <div>
          <label>Maths Marks</label>
          <input ref={mathsInputRef}></input>
          <span ref={mathsSpanRef}></span>
        </div>
        <div>
          <label>Science Marks</label>
          <input ref={scienceInputRef}></input>
          <span ref={scienceSpanRef}></span>
        </div>
        <div>
          <label>Social Marks</label>
          <input ref={socialInputRef}></input>
          <span ref={socialSpanRef}></span>
        </div>
        <button type="button" onClick={calculateTotalMarks}>
          Calculate
        </button>
      </form>
      <div>
        <p ref={resultParaRef}></p>
      </div>
    </div>
  );
}

export default TenthForm2;
