import React from "react";
import logo1 from "../img/logo1.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          {/* <li className="name"> */}
          <div className="name">
            <img src={logo1} alt="" className="logo" />
          </div>
          {/* </li> */}
          {/* <img src={logo} alt="" className="logo" /> */}
          <li>
            <a className="nav-items" href="#">
              Home
            </a>
          </li>
          
          
          


          












          
          
          <li>
            <a className="nav-items our-products" href="#Products">Our Products</a>
            <div className="space-below-ourproducts">
            <div className="products-section-list"></div>  
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
    </div>
  );
}

export default Navbar;
