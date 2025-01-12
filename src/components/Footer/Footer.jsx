import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
          HungerHub is your go-to food delivery platform, offering a seamless experience to 
          explore, order, and enjoy your favorite meals from local restaurants. Fast, 
          reliable, and always fresh, we bring delicious food right to your doorstep. 
          Join us and satisfy your cravings with ease!
          </p>
          <div className="footer-social-icons">
            <a href="">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/in/pornima-sadanshiv-32b17b25b/">
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-123-456-7890</li>
            <li>contact@HungerHub.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © HungerHub.com</p>
    </footer>
  );
};

export default Footer;
