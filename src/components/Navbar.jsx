import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); //state to know menu close or open
  return (
    <div className="header" onScroll={() => {}}>
      <div className="navbar">
        {/* Logo */}

        <div className="navbar__img">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>

        {/* Menu-List */}

        <div className={`navbar__menu ${showMenu ? "navbar__menu__show" : ""}`}>
          <ul className="navbar__menu__list">
            <li>
              <Link
                to="/"
                onClick={() => setShowMenu(!showMenu)}
                className="navbar__menu__list__link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setShowMenu(!showMenu)}
                className="navbar__menu__list__link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/models"
                onClick={() => setShowMenu(!showMenu)}
                className="navbar__menu__list__link"
              >
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                onClick={() => setShowMenu(!showMenu)}
                className="navbar__menu__list__link"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                onClick={() => setShowMenu(!showMenu)}
                className="navbar__menu__list__link"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setShowMenu(!showMenu)}
                className="navbar__menu__list__link"
              >
                Contact
              </Link>
            </li>

            {/* Mobile-close-button */}

            <div
              className="navbar__mobile__close"
              onClick={() => setShowMenu(!showMenu)}
            >
              <IoClose />
            </div>
          </ul>
        </div>

        {/* Login-buttons */}
        <div className="navbar__login">
          <buttton className="navbar__login__signin">Sign In</buttton>
          <button className="navbar__login__register">Register</button>
        </div>

        {/* Mobile-hamburger */}
        <div
          className="navbar__mobile__hamburger"
          onClick={() => setShowMenu(!showMenu)}
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
