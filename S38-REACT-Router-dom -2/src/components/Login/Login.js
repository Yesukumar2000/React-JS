import React, { useRef } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let firstNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  let navigate = useNavigate();
  
  return (
    <div className="login-container">
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form>
      <div>
          <label>FristName:</label>
          <input type="text" placeholder="John" ref={firstNameInputRef} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="john123@gmail.com" ref={emailInputRef} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="john123"  ref={passwordInputRef} required />
        </div>
        <button type="button" onClick={()=>{
          let typedFirstName = firstNameInputRef.current.value;
          let typedEmail =  emailInputRef.current.value;
          let typedPassword = passwordInputRef.current.value;
          
          if (typedEmail === 'john123@gmail.com' && typedPassword === 'john123'){
            navigate('home',{state:{fristName: typedFirstName}});
          }else{
            alert('Invalid Email and password');
          }
        }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
