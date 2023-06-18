import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" flexCenter section-p1">
      <div className="paddings col">
        <img className="logo" src="./logo5.png" alt="Logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> GAUR YAMUNA CITY GREATER NOIDA, Dankaur,
          Sikandrabad Bulandshahr, UP 203201 IN
        </p>
        <p>
          <strong>Phone:</strong> +91 9068227554
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 18:00, mon - sat
        </p>
        <div className="follow">
          <h4>Follow us</h4>
        </div>
      </div>
      <div className="paddings col">
        <a href="about.html">About us</a>
        <a href="#">our offerings</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact us</a>
      </div>
      <div className="col">
        <h4>our product</h4>
        <a href="#">how apni gaadi works?</a>
        <a href="#">apni gaadi user</a>
        <a href="#">apni Gaadi Driver</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <a href="#">
            <img src="./ios.png" alt="App Store" />
          </a>
          <a href="#">
            <img src="/androidbutton.png" alt="Google Play" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>(C) 2023, Apni Gaadi</p>
      </div>
    </footer>
  );
};

export default Footer;
