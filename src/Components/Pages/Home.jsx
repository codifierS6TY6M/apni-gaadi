import React from "react";
import "./Home.css";
import { motion, spring } from "framer-motion";

const Home = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth">
          <div className=" paddings innerWidth flexCenter hero-container">
            <div className="hero-left">
              <div className="  hero-title-img">
                <img src="logo5.png" alt="logo" />
              </div>
              <div className=" flexColStart hero-title">
                <motion.h1
                  initial={{ y: "2rem", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                  }}
                >
                  <h1>
                    We are offering you the best,
                    <br />
                    comfortable & affordable cabs.
                    <br />
                    That make you feel like Apni gaadi.
                  </h1>
                </motion.h1>
                <h3>we are coming soon</h3>
                <h3>Join a ride with us...</h3>
                <div className="download-button">
                  <button>
                    <img src="Group1.png" alt="Android" />
                    Android
                  </button>
                  <button>
                    <img src="Vector1.png" alt="iOS" />
                    ios
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease in",
                }}
              >
                <div className="image-container">
                  <img src="./img2.png" alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
