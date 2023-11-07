import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand text-light " href="#">
            <h4 className="fst-italic">Developer School</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/user-profile/44" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
