import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ userTag, setUserTag }) => {
  // const navigate = useNavigate();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar   sticky-top "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-warning" to="/">
            SearchJobs.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/jobs">
                  All Jobs
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/engineering"
                  onClick={() => {
                    console.log("engineering");
                  }}
                >
                  Engineering
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/management"
                  onClick={() => {
                    console.log("management");
                  }}
                >
                  Management
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/marketing">
                  Marketing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sales">
                  Sales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <div className="dropdown me-2">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userTag}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Setting
                    </a>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/login"
                      onClick={() => setUserTag("")}
                    >
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>

              <NavLink
                to="/login"
                className="btn btn-success me-2"
                type="submit"
              >
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-warning" type="submit">
                Sign Up
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
