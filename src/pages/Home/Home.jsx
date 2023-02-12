import React from "react";
import { FeaturedProducts } from "../../containers/index";

import "./home.css";

import { BsArrowReturnRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section className="homeBanner">
        <video id="myVideo" autoPlay loop muted>
          <source src="Videos/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="homeBannerContent">
            <h1>Yes! Fashion is We Are</h1>
            <p>
              one-stop-shopping store for the coolest trendy and fashionable
              apparels in the town to architect your personality
            </p>

            <button className="homeBtn">
              <p>Learn More</p>{" "}
              <BsArrowReturnRight className="arrowRightIcon" />
            </button>
          </div>
          {/* <div></div> */}
        </div>
      </section>
      <FeaturedProducts />
    </>
  );
};

export default Home;
