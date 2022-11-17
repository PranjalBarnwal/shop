import React from "react";
import "./ContactUs.css";
import { IframeHTMLAttributes } from "react";
const ContactUs = () => {
  return (
    <div className="body">
      <section className="contact">
        <div className="head">Contact Us</div>
        <div className="reach">Drop a Mail- souravtraders@gmail.com</div>
        <div className="reach">Call us- 7903577606</div>
      </section>
      <section className="locate-shop">
        <div className="branch">
          <div className="shop">Koderma Branch</div>
          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464843.6278643465!2d85.031883265625!3d24.464977000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f30aadf586e4d5%3A0x56fe4a6bea6682d0!2sSourav%20Traders%20(%20Kajaria%20Eternity%20)!5e0!3m2!1sen!2sin!4v1667937867855!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="address">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, delectus!</div>
        </div>
        <div className="branch">
          <div className="shop">Jhumri Telaiya Branch</div>
          <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d454.0317047217491!2d85.52510029002786!3d24.4419839594962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1761044562d6ea3!2sKajaria%20Eternity%20Gallery!5e0!3m2!1sen!2sin!4v1667937958302!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <div className="address">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, distinctio.</div>
        </div>

      </section>
    </div>
  );
};

export default ContactUs;
