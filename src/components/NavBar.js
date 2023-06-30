import React from "react";
import "../styles/navbar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="house vector" className="navbar-logo" />
      <h2 className="navbar-title"> Surreal Estate </h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="blank">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="blank">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
