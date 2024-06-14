import React, { useRef, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  let firstNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      firstNameInputRef.current.value = localStorage.getItem("firstName");
      emailInputRef.current.value = localStorage.getItem("email");
      passwordInputRef.current.value = localStorage.getItem("password");
      //session storage
      firstNameInputRef.current.value = sessionStorage.getItem("firstName");
      emailInputRef.current.value = sessionStorage.getItem("email");
      passwordInputRef.current.value = sessionStorage.getItem("password");
      handleLoginOnClick();
    }
  });
  let handleLoginOnClick = () => {
    let typedFirstName = firstNameInputRef.current.value;
    let typedEmail = emailInputRef.current.value;
    let typedPassword = passwordInputRef.current.value;

    if (typedEmail === "john@gmail.com" && typedPassword === "john") {
      localStorage.setItem("firstName", typedFirstName);
      localStorage.setItem("email", typedEmail);
      localStorage.setItem("password", typedPassword);
      //sesion storage
      sessionStorage.setItem("firstName", typedFirstName);
      sessionStorage.setItem("email", typedEmail);
      sessionStorage.setItem("password", typedPassword);
      navigate("/home");
    } else {
      alert("Invalid Email and password");
    }
  };

  let navigate = useNavigate();
  return (
    <div className="login-container">
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form>
        <div>
          <label>FirstName:</label>
          <input
            type="text"
            placeholder="Ex:John"
            ref={firstNameInputRef}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            ref={emailInputRef}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="john"
            ref={passwordInputRef}
            required
          />
        </div>
        <button type="button" onClick={handleLoginOnClick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
