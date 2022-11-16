import React from "react";
import logo1 from "../img/logo1.png";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* <li className="name"> */}
        <div className="name">
          <img src={logo1} alt="" className="logo" />
        </div>
       
       
       
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
  
       
       
        <li>
          <a className="nav-items" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-items our-products" href="#Products">
            Our Products
          </a>
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
          <a className="nav-items" href="#AboutUs">
            About Us
          </a>
        </li>
        <li>
          <a className="nav-items" href="#Contact">
            Contact Us
          </a>
        </li>
        <li>
          <button className="locate">Locate Our Stores</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
