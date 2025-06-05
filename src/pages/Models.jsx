import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

const Models = () => {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Audi A1</p>
                      <span>
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$45</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <FaCarSide /> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <FaCarSide />
                    </span>
                    <span>
                      <FaCarSide /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <FaCarSide />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Golf 6</p>
                      <span>
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$37</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <FaCarSide /> &nbsp; VW
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <FaCarSide />
                    </span>
                    <span>
                      <FaCarSide /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <FaCarSide />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Toyota</p>
                      <span>
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$30</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <FaCarSide /> &nbsp; Camry
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <FaCarSide />
                    </span>
                    <span>
                      <FaCarSide /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <FaCarSide />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BMW 320</p>
                      <span>
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$35</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <FaCarSide /> &nbsp; ModernLine
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <FaCarSide />
                    </span>
                    <span>
                      <FaCarSide /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <FaCarSide />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg5} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Mercedes</p>
                      <span>
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$50</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <FaCarSide /> &nbsp; Benz GLK
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <FaCarSide />
                    </span>
                    <span>
                      <FaCarSide /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <FaCarSide />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg6} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>VW Passat</p>
                      <span>
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                        <FaRegStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$25</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <FaCarSide /> &nbsp; CC
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <FaCarSide />
                    </span>
                    <span>
                      <FaCarSide /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <FaCarSide />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <MdCall width={40} height={40} />
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Models;
