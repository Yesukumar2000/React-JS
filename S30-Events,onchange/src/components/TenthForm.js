import React, { useRef } from "react";
import './TenthForm.css';

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

  let getGrade = (marks) =>
  marks >= 100
    ? "Maximum Marks 💯 only"
    : marks >= 86
    ? "Outstanding Marks 🤩 "
    : marks >= 66
    ? "Excellent Marks 😎"
    : marks >= 51
    ? "Great Marks 🙂"
    : marks >= 46
    ? "Good Marks 🙁"
    : marks >= 36
    ? "Better Marks 🙄"
    : marks >= 31
    ? "Pass 🙁"
    : "Fail  😞";

   
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
          <input ref={firstNameInputRef} 
             onFocus={()=>{
              firstNameInputRef.current.style.backgroundColor= 'lightpink';
              console.log(firstNameInputRef,'-onFocus');
            }}
            onChange={()=>{ 
              firstNameInputRef.current.style.backgroundColor ='lightgreen'
              console.log(firstNameInputRef,'-onChange');
            }}
            onBlur={()=>{
              firstNameInputRef.current.style.backgroundColor= 'lightblue';
              console.log(firstNameInputRef,'-onBlur');
            }}
          ></input>
          <span></span>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputRef}
            onFocus={()=>{
              lastNameInputRef.current.style.backgroundColor= 'lightpink';
              console.log(lastNameInputRef,'-onFocus');
            }}
            onChange={()=>{ 
              lastNameInputRef.current.style.backgroundColor = 'lightgreen'
              console.log(lastNameInputRef,'-onChange');
            }}
            onBlur={()=>{
              lastNameInputRef.current.style.backgroundColor= 'lightblue';
              console.log(lastNameInputRef,'-onBlur');
            }}      
          ></input>
          <span></span>
        </div>
        <div>
          <label>English Marks</label>
          <input ref={englishInputRef}
           onFocus={()=>{
            englishInputRef.current.style.backgroundColor= 'lightpink';
            console.log(englishInputRef,'-onFocus');
          }}
          onChange={()=>{
            let marks = englishInputRef.current.value;
            englishSpanRef.current.innerHTML = getGrade(marks);
            englishInputRef.current.style.backgroundColor = 'lightgreen'
            console.log(englishInputRef,'-onChange');
          }}
          onBlur={()=>{
            englishInputRef.current.style.backgroundColor= 'lightblue';
            console.log(englishInputRef,'-onBlur');
          }}
          ></input>
          <span ref={englishSpanRef}></span>
        </div>
        <div>
          <label>Telugu Marks</label>
          <input ref={teluguInputRef} 
           onFocus={()=>{
            teluguInputRef.current.style.backgroundColor= 'lightpink';
            console.log(teluguInputRef,'-onFocus');
          }}
          onChange={()=>{ 
            let marks = teluguInputRef.current.value;
            teluguSpanRef.current.innerHTML = getGrade(marks);
            teluguInputRef.current.style.backgroundColor = 'lightgreen'
            console.log(teluguInputRef,'-onChange');
          }}
          onBlur={()=>{
            teluguInputRef.current.style.backgroundColor= 'lightblue';
            console.log(teluguInputRef,'-onBlur');
          }}></input>
          <span ref={teluguSpanRef}></span>
        </div>
        <div>
          <label>Hindi Marks</label>
          <input ref={hindiInputRef}
           onFocus={()=>{
            hindiInputRef.current.style.backgroundColor= 'lightpink';
            console.log(hindiInputRef,'-onFocus');
          }}
          onChange={()=>{
            let marks = hindiInputRef.current.value;
            hindiSpanRef.current.innerHTML = getGrade(marks);
            hindiInputRef.current.style.backgroundColor = 'lightgreen'
            console.log(hindiInputRef,'-onChange');
          }}
          onBlur={()=>{
            hindiInputRef.current.style.backgroundColor= 'lightblue';
            console.log(hindiInputRef,'-onBlur');
          }}
          ></input>
          <span ref={hindiSpanRef}></span>
        </div>
        <div>
          <label>Maths Marks</label>
          <input ref={mathsInputRef}
           onFocus={()=>{
            mathsInputRef.current.style.backgroundColor= 'lightpink';
            console.log(mathsInputRef,'-onFocus');
          }}
          onChange={()=>{
            let marks = mathsInputRef.current.value;
            mathsSpanRef.current.innerHTML = getGrade(marks);
            mathsInputRef.current.style.backgroundColor = 'lightgreen'
            console.log(mathsInputRef,'-onChange');
          }}
          onBlur={()=>{
            mathsInputRef.current.style.backgroundColor= 'lightblue';
            console.log(mathsInputRef,'-onBlur');
          }}
          ></input>
          <span ref={mathsSpanRef}></span>
        </div>
        <div>
          <label>Science Marks</label>
          <input ref={scienceInputRef}
           onFocus={()=>{
            scienceInputRef.current.style.backgroundColor= 'lightpink';
            console.log(scienceInputRef,'-onFocus');
          }}
          onChange={()=>{
            let marks = scienceInputRef.current.value;
            scienceSpanRef.current.innerHTML = getGrade(marks);
            scienceInputRef.current.style.backgroundColor = 'lightgreen';
            console.log(scienceInputRef,'-onChange');
          }}
          onBlur={()=>{
            scienceInputRef.current.style.backgroundColor= 'lightblue';
            console.log(scienceInputRef,'-onBlur');
          }}
          ></input>
          <span ref={scienceSpanRef}></span>
        </div>
        <div>
          <label>Social Marks</label>
          <input ref={socialInputRef}
           onFocus={()=>{
            socialInputRef.current.style.backgroundColor= 'lightpink';
            console.log(socialInputRef,'-onFocus');
          }}
          onChange={()=>{
            let marks = socialInputRef.current.value;
            socialSpanRef.current.innerHTML = getGrade(marks);
            socialInputRef.current.style.backgroundColor = 'lightgreen';
            console.log(socialInputRef,'-onChange');
          }}
          onBlur={()=>{
            socialInputRef.current.style.backgroundColor= 'lightblue';
            console.log(socialInputRef,'-onBlur');
          }}
          ></input>
          <span ref={socialSpanRef}></span>
        </div>
        <button type="button" onMouseMove={calculateTotalMarks}
        >
          Calculate
        </button>
      </form>
      <div>
        <p ref={resultParaRef}></p>
      </div>
    </div>
  );
}

export default TenthForm;
