import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            alt="logo"
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          onClick={() => setToggle(!toggle)}
          className={`navbar-burger burger ${toggle ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${toggle ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/doc" className="navbar-item">
            Documentation
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/signup" className="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link to="/signin" className="button is-light">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
