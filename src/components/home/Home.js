import React from 'react'
import landingimg from "../img/landingimg.png"
import bathroom from "../img/bathroom.webp"
import "./Home.css"
const Home = () => {
  return (
 <section className="main">
  <div className="left">
    <div className="left-top">Experience the best <strong>Quality</strong> and <strong>Price</strong> at</div>
    <div className="left-bottom">Sourav Traders</div>
  </div>

  <div className="right">
    <img className='home-img' src={landingimg} alt="" />
  </div>
 </section>
 )
}

export default Home
