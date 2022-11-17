import React,{useState} from "react";
import logo1 from "../img/logo1.png";
import "./Navbar.css";

function Navbar() {
  // // const toggleButton=document.querySelector(".toggle-button");
  // // const navlist = document.getElementsByClassName('.nav-list')[0];
  // const navlist = useRef();
  const [toggle,setToggle]=useState(false);
  const toggleFunc=()=>{
  setToggle(!toggle);
 }
  // console.log(navlist);
  // // toggleButton.addEventListener('click',()=>{
  // // })

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
      <ul className={`nav-list ${toggle?'active':''}`} >

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
