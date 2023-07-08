import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="house vector" className="navbar-logo" />
      <h2 className="navbar-title"> Surreal Estate </h2>
      <ul className="navbar-links">
        <li>
          <Link className="navbar-links-item-text" to="/">
            {" "}
            View Properties{" "}
          </Link>
        </li>
        <li>
          <Link className="navbar-links-item-text" to="add-property">
            {" "}
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
