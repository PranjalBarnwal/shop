import React, { useState } from "react";
import logo1 from "../img/logo1.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  
  const [toggle, setToggle] = useState(false);
  const toggleFunc = () => {
    setToggle(!toggle);
  };
 

  return (
    <nav className="navbar">
      <div className="name">
        <img src={logo1} alt="" className="logo" />
      </div>
      <a href="#" className="toggle-button" onClick={toggleFunc}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <ul className={`nav-list ${toggle ? "active" : ""}`}>
        <li>
          <Link onClick={toggleFunc}  to="/" className="nav-items">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={toggleFunc}  to="/products" className="nav-items our-products">
            Our Products
          </Link>
          <div className="wrapper">
            <div className="products-section">
              <div className="sides"></div>
              <div className="img "></div>
              <div className="img "></div>
              <div className="img"></div>
              <div className="img"></div>
              <div className="img"></div>
              <div className="sides"></div>
            </div>
          </div>
        </li>
        <li>
          <Link onClick={toggleFunc} to="/about" className="nav-items">
            About Us
          </Link>
        </li>
        <li>
          <Link onClick={toggleFunc}  to="/contact" className="nav-items">
            Contact Us
          </Link>
        </li>
        <li>
          
            <Link onClick={toggleFunc}  to="/contact" className="locate" style={{}}>
              Locate Our Store
            </Link>
          
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
