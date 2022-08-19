
import 'font-awesome/css/font-awesome.min.css';
import './navbar.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg ">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid border-bottom">
            <h3 className="logo" >
              LOGO
            </h3>
            <button
            
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation "
              onClick={() => setShow(!show)}>
              <span  className="navbar-toggler-icon "></span>
            </button>
            <div  className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto navBar">
                <li className="nav-item">
                  <NavLink className="nav-link link" aria-current="page" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link" to="/destination">
                    Destination
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link" to="/tour">
                    Tour
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link" to="/login">
                    <i class="fa fa-shopping-cart"></i>
                  </NavLink>
                </li>
                <li>
                <NavLink className="nav-link link" to="/login">
                <i className='fas fa-user-alt' ></i>
              </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;