import React from "react";
import "./About.css";
const About = () => {
  return (
      <section className="about-us">
        <div className="header" style={{marginBottom: '1rem'}}>About Us</div>
        <div className="order1">
          <div className="subtext">
            Sourav Traders is one the most reputed and trustworthy name in
            Jharkhand when it comes to tiles, granites and sanitarywares. We
            have been in this industry for last 25 years.
          </div>
          <img src="" alt="" className="subtext-img" />
        </div>
        <div className="why-customer">
          <b>Why do customer choose us?</b>
        </div>

        <div className="sub-points ">Quality of Products</div>
        <div className="points-container">
          <div className="points">
            We are a one-stop destination for all your tile needs. Whether
            you're looking for flooring, wall tiles or any other types of
            ceramic tile, we have it all! With numerous years experience in this
            industry, we know what our customers need
          </div>
          <img src="" alt="" className="point-img" />
        </div>

        <div className="sub-points ">The best prices in town</div>
        <div className="points-container">
          <div className="points">
            We offer the best prices in town on all our tiles, granites and
            sanitarywares so that you can make your home truly your own with
            whatever budget you have. Our products are competitively priced and
            our customer service is second to none!
          </div>

          <img src="" alt="" className="point-img" />
        </div>
        <div className="sub-points ">About Team</div>
        <div className="points-container">
          <div className="points">
            We have a team of trained and friendly staffs headed by Gopal
            Prasad(Founder) and his son Sourav Traders( Managing Director) ,
            working solely towards delivering customers , what they desire.
          </div>

          <img src="" alt="" className="point-img  last" />
        </div>
      </section>
  );
};

export default About;
