import React from "react";
import "./Catagories.css";
const Catagories = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth">
          <div className="flexColStart c-head">
            <span>Our Categories</span>
          </div>
          <div className=" paddings innerWidth flexCenter c-container">
            <div className="c-left">
              <div className="paddings innerWidth Catagories">
                <div className="Catagories1-title1">
                  <span>APNI CABS</span>
                </div>
                <div className=" apnicab-logo">
                  <button>learn more </button>
                  <img src="apnicabs.png" alt="" />
                </div>
              </div>
              <div className="paddings innerWidth Catagories">
                <div className="Catagories1-title1">
                  <span>APNI BIKE</span>
                </div>
                <div className=" apnicab-logo">
                  <button>comming soon </button>
                  <img src="apnibike.png" alt="" />
                </div>
              </div>
            </div>
            <div className="c-right">
              <div className="paddings innerWidth Catagories">
                <div className="Catagories1-title1">
                  <span>APNI AUTO</span>
                </div>
                <div className=" apnicab-logo">
                  <button>comming soon </button>
                  <img src="apniauto.png" alt="" />
                </div>
              </div>
              <div className="paddings innerWidth Catagories">
                <div className="Catagories1-title1">
                  <span>APNI REANTAL </span>
                </div>
                <div className=" apnicab-logo">
                  <button>comming soon </button>
                  <img src="apnirental.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catagories;
