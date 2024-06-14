import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="nav-logo">
          <img src="/images/doctor-logo.gif" alt="logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/navbar"
              style={(obj) => {
                if (Object.isactive === true) {
                  return {
                    color: "green",
                    boxShadow: "10px gray",
                  };
                }
              }}
              
              onClick={() => {
                navigate("/navbar");
              }}
              >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={(obj) => {
                if (Object.isactive === true) {
                  return {
                    color: "green",
                    boxShadow: "10px gray",
                  };
                }
              }}
              onClick={() => {
                navigate("/about");
              }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={(obj) => {
                console.log(obj);
                if (Object.isactive === true) {
                  return {
                    color: "green",
                    boxShadow: "10px 10px 10px 10px gray",
                  };
                }
              }}
              onClick={() => {
                navigate("/contact");
              }}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={()=>{
              navigate("/");
            }}>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
