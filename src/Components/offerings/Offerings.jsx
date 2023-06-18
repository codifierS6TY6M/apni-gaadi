import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import "./Offering.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Offerings = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span>Our offerings</span>
        </div>
        <div className="flexColStart slider-container">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            onSlideChange={handleSlideChange}
            className="swiper-container"
          >
            <SwiperSlide>
              <div className="card">
                <h2>Sharing Features</h2>
                <p>
                  Appni Gaadi takes pride in being the first transportation
                  service to introduce sharing features in our platform. We
                  understand the importance of sustainability and reducing
                  traffic congestion, which is why we pioneered the concept of
                  ride sharing in our industry. By allowing passengers to share
                  rides with others heading in the same direction, we promote a
                  more eco-friendly transportation option that helps reduce the
                  number of vehicles on the road. Our innovative sharing
                  features not only benefit the environment but also provide
                  cost-saving opportunities for our passengers. Join us in
                  revolutionizing the way people travel and contribute to a
                  greener future. learn more...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h2>Affordable Prices</h2>
                <p>
                  we believe that transportation should be accessible to
                  everyone. That's why we strive to offer the most affordable
                  prices in the market. We understand the importance of
                  cost-effectiveness, whether you're commuting to work, going
                  out for shopping, or exploring a new city. Our pricing
                  structure is designed to provide you with a pocket-friendly
                  option that doesn't compromise on quality or comfort. By
                  availing our services, you can enjoy a reliable and convenient
                  mode of transportation without breaking the bank. learn
                  more...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h2>Fair Earnings for Drivers</h2>
                <p>
                  At Appni Gaadi, we prioritize driver satisfaction by offering
                  competitive compensation with maximum cuts and minimal
                  platform fees. Our driver-centric approach empowers them with
                  resources for professional growth, flexible hours, and
                  round-the-clock support. We value strong relationships with
                  our drivers, fostering their success while delivering
                  exceptional service. With fair earnings and a supportive
                  environment, drivers thrive and provide our valued customers
                  with an outstanding transportation experience. learn more...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h2>Real-Time Tracking</h2>
                <p>
                  With Appni Gaadi's real-time tracking feature, you can stay
                  informed about the location of your ride throughout your
                  journey. Our advanced technology enables passengers to track
                  their driver's progress in real-time on the app's map,
                  ensuring transparency and peace of mind. Whether you're
                  waiting for your ride or simply want to know the estimated
                  arrival time, our real-time tracking feature provides you with
                  accurate and up-to-date information, enhancing your overall
                  travel experience. Rest assured, with Appni Gaadi, you'll
                  always be in the know about your ride's whereabouts.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h2>In-App Payments</h2>
                <p>
                  Appni Gaadi offers the convenience of in-app payments, making
                  your ride experience seamless and hassle-free. With our secure
                  and reliable payment system, you can easily pay for your rides
                  directly through the app. Say goodbye to the need for cash
                  transactions or searching for the right change. Our in-app
                  payments ensure a swift and secure transaction process,
                  providing you with a convenient and contactless payment
                  option. Enjoy the peace of mind knowing that your payment
                  information is protected, while experiencing the ease and
                  efficiency of in-app payments with Appni Gaadi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h2>Multiple Vehicle Options</h2>
                <p>
                  At Appni Gaadi, we understand that different journeys require
                  different types of vehicles. That's why we offer a diverse
                  range of options to cater to your specific needs. From our
                  compact Apni Mini for quick city rides to the spacious Apni
                  SUV for family trips, we have a vehicle for every occasion.
                  Need a two-wheeler? Choose Apni Bike for zipping through
                  traffic. For short distances, hop on an Apni Auto. Whatever
                  your preference, we provide a variety of vehicles to ensure a
                  comfortable and personalized experience, making your journey
                  with us enjoyable and convenient.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h2>Safety Measures</h2>
                <p>
                  At Appni Gaadi, safety is our top priority. We have
                  implemented stringent safety measures to ensure the well-being
                  of our passengers. Our drivers undergo comprehensive
                  background checks to ensure their reliability and
                  trustworthiness. Additionally, we conduct regular vehicle
                  inspections to maintain a high standard of safety and comfort.
                  We also provide a dedicated support system, available 24/7, to
                  address any safety concerns or issues that may arise during
                  your journey. With Appni Gaadi, you can have peace of mind
                  knowing that we are committed to providing a safe and secure
                  transportation experience for all our passengers.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h2>24/7 Availability</h2>
                <p>
                  Appni Gaadi is committed to providing round-the-clock
                  availability to meet your transportation needs. Whether it's
                  an early morning airport ride or a late-night trip back home,
                  our service is available 24/7. We understand that convenience
                  and flexibility are essential, which is why our dedicated
                  drivers are ready to serve you at any hour. No matter the
                  time, you can rely on Appni Gaadi to provide reliable and
                  efficient transportation services, ensuring that you can reach
                  your destination whenever you need to, day or night.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
