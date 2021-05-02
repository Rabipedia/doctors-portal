import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link mr-5" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="#">
                Blog
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link ms-5" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
