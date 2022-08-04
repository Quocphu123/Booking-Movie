import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Pages/assets/logo.png";

const Header = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "blue" }}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <img style={{ width: "70px" }} src={logo} alt="...." />
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
