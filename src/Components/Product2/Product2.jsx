import React from "react";
import "./Product2.css";
const Product2 = () => {
  return (
    <div>
      <section className="info-wrapper">
        <div className="paddings innerWidth">
          <div className=" paddings innerWidth flexCenter info-container">
            <div className="info-Product">
              <div className=" flexColStart Product-title">
                <h4>Apni Gaadi Driver</h4>
                <h4>Coming Soon</h4>
                <h5>
                  The ApniGaadi Driver app is a powerful tool designed for our
                  drivers. With its user-friendly interface and robust features,
                  drivers can efficiently manage their rides, track earnings,
                  receive trip requests, and access important information, all
                  in one convenient app. It empowers our drivers to provide
                  seamless and exceptional service to our passengers, ensuring a
                  smooth and efficient transportation experience for all.
                </h5>
              </div>
            </div>
            <div className="info-left-right">
              <div className="image-container">
                <img src="./apni driver.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product2;
