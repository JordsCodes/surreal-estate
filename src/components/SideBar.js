import React from "react";
import { Link } from "react-router-dom";
import "../styles/side-bar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      Filter by City
      <Link className="sidebar-link" to={`/?query={"city": "Manchester"}`}>
        Manchester
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "Leeds"}`}>
        Leeds
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "Sheffield"}`}>
        Sheffield
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "Liverpool"}`}>
        Liverpool
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "Newcastle"}`}>
        Newcastle
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "York"}`}>
        York
      </Link>
    </div>
  );
};

export default SideBar;
