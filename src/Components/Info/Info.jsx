import React from "react";
import './Info.css'
import { motion, spring } from "framer-motion";
const Info = () => {
  return (
    <div>
      <section className="info-wrapper">
        <div className="paddings innerWidth">
          <div className=" paddings innerWidth flexCenter info-container">
            <div className="info-left">
              <h1>WHAT WE ARE?</h1>
              <div className=" flexColStart info-title">
                <motion.h3
                  initial={{ y: "2rem", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                  }}
                >
                  <h3>
                    Apni Gaadi is a pioneering transportation company that has
                    revolutionized the way people travel. With our innovative
                    methods and commitment to affordability, we have become a
                    trusted name in the industry. At the core of Apni Gaadi's
                    success is our customer-centric approach. We prioritize the
                    needs and convenience of our passengers, ensuring a seamless
                    and enjoyable travel experience. With a user-friendly mobile
                    application, booking a ride has never been easier. Our app
                    allows passengers to quickly select their destination,
                    choose their preferred vehicle type, and track their ride in
                    real-time. We have simplified the payment process by
                    enabling in-app transactions, eliminating the hassle of cash
                    payments.
                  </h3>
                </motion.h3>
              </div>
            </div>
            <div className="info-left-right">
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease in",
                }}
              >
                <div className="image-container">
                  <img src="./image 4.png" alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
