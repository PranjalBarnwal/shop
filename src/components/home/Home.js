import React from 'react'
import landingimg from "../img/landingimg.png"
import bathroom from "../img/bathroom.webp"
import "./Home.css"
const Home = () => {
  return (
    <section className='main'>\
    <p>Experience the best quality and price at Sourav Traders</p>
        <div className="left"></div>
       <div className="right"><img src={bathroom} alt="" style={{width:"700px"}}/></div>
    </section>
 )
}

export default Home
