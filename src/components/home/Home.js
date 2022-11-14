import React from 'react'
import landingimg from "../img/landingimg.png"
import bathroom from "../img/bathroom.webp"
import "./Home.css"
const Home = () => {
  return (
    <section className='main'>
   <div className="left">
    <p>Experience the best <strong>Quality</strong> and <strong>Price</strong> at <span>Sourav Traders</span></p>
    </div>
   <div className="right">
    <img className='home-img' src={landingimg} alt="" />
   </div>
   
    </section>
 )
}

export default Home
