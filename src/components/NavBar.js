import React, { useEffect } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import logo from "../images/logo.png";

const NavBar = ({ user, setUser }) => {
  const handleCredentialResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    setUser(userObject);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "541109869039-6os89jsinn35p6jkv9479b3qeij6quk8.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("sign-in"), {
      theme: "outline",
      size: "large",
    });
  }, [user]);

  return (
    <div className="navbar">
      <img src={logo} alt="house vector" className="navbar-logo" />
      <h2 className="navbar-title"> Surreal Estate </h2>
      <ul className="navbar-links">
        <li>
          <Link className="navbar-links-item" to="/">
            {" "}
            View Properties{" "}
          </Link>
        </li>
        <li>
          <Link className="navbar-links-item" to="add-property">
            {" "}
            Add a Property
          </Link>
        </li>
        <li>
          {" "}
          {user && (
            <Link className="navbar-links-item" to="saved-properties">
              {" "}
              Saved Properties
            </Link>
          )}
        </li>
        {user ? (
          <div className="sign-out">
            <img height="50px" src={user?.picture} alt="google profile" />
            <p>
              Welcome back, {user.given_name}.{" "}
              <a onClick={handleSignOut} href="/">
                Click here
              </a>{" "}
              to sign out.
            </p>
          </div>
        ) : (
          <div className="sign-in">
            <div id="sign-in" />
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
