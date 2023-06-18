import React from "react";
import "./Product1.css";
const Product1 = () => {
  return (
    <div>
      <section className="info-wrapper">
        <div className="paddings innerWidth">
          <div className=" paddings innerWidth flexCenter info-container">
            <div className="info-Product">
              <h1>Our Products</h1>
              <div className=" flexColStart Product-title">
                <h4>Apni Gaadi user</h4>
                <h4>Coming Soon</h4>
                <h5>
                  The ApniGaadi User app is your gateway to convenient and
                  reliable transportation. With its intuitive interface, you can
                  easily book rides, track your driver's location in real-time,
                  make secure in-app payments, and access essential ride
                  details. The user app also provides access to exclusive
                  offers, loyalty rewards, and responsive customer support,
                  ensuring a seamless and enjoyable experience every time you
                  travel with ApniGaadi. Experience the convenience and
                  reliability of our user app and enjoy hassle-free
                  transportation at your fingertips.
                </h5>
              </div>
            </div>
            <div className="info-left-right">
              <div className="image-container">
                <img src="./apni user.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product1;
