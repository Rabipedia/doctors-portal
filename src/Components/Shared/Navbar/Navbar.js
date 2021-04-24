import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="#">About</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="#">Dental services</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="#">Reviews</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="#">Blog</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link ms-5" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
  );
};

export default Navbar;
