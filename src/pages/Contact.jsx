import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IoMdMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section className="contact-IoMdMailpage">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <MdCall /> &nbsp; (123) 456-7869
              </a>
              <a href="/">
                <IoMdMail /> &nbsp; carrental@carmail.com
              </a>
              <a href="/">
                <FaLocationArrow />
                &nbsp; Belgrade, Serbia
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <IoMailOpenOutline />
                  &nbsp; Send Message
                </button>
              </form>
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

export default Contact;
