import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer_content">
        <div className="footer_content_left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel
            voluptatem, ratione, neque reiciendis laborum reprehenderit
            deserunt, quos nihil hic quia sint nesciunt doloribus libero vitae
            fugit voluptatibus aspernatur tempore eligendi consectetur aliquid
            ab quo! Officia recusandae vitae voluptatum, illo quidem officiis
            vero provident suscipit tempore rem distinctio eaque quaerat?
          </p>
          <div className="footer_social_icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer_content_center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer_content_right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+996(123)-45-67-89 </li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
