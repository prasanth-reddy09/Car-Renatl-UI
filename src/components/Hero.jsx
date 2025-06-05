import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import HeroCar from "../images/hero/main-car.png";
import BgShape from "../images/hero/hero-bg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero-section">
      <div className="hero__container container" id="home">
        <img className="bg-shape" src={BgShape} alt="image" />
        <div className="hero__container__info">
          <h3 className="hero__container__info__title">Plan your trip now</h3>
          <h1 className="hero__container__info__quote">
            Save <span>big</span> with our car rental
          </h1>
          <p className="hero__container__info__description">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>

          <div className="hero__container__buttons">
            <Link
              to="/"
              className="hero__container__buttons__bookride"
              onClick={bookBtn}
            >
              Book Ride &nbsp; <FaRegCircleCheck />
            </Link>
            <Link to="/" className="hero__container__buttons__learnmore">
              Learn More &nbsp; <IoIosArrowForward />
            </Link>
          </div>
        </div>

        <div className="hero__container__img">
          <img src={HeroCar} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
