import "./navbar.scss";
import { NavLink } from "react-router-dom";
import appLogo from "../../../assets/image/applogo.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" className="logo ">
          <img
            className="appLogo "
            style={{ marginTop: "10px" }}
            src={appLogo}
            alt="App Logo"
          />
        </NavLink>

        {/* Mobile Menu Toggle Button */}
        {/* <button className="menu-toggle" onClick={toggleMenu}>
          <span className={menuOpen ? "toggle-icon open" : "toggle-icon"}></span>
        </button> */}

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lgs:hidden p-2 text-white focus:outline-none z-100 mr-2 "
        >
          <div
            className={`w-6 h-1 bg-white mb-1 transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-6 h-1 bg-white mb-1 transition-transform ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-1 bg-white mt-1 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        <div className={`middle-section ${menuOpen ? "hidden" : ""}`}>
          <ul className="navLinks">
            {["HOME", "ABOUT", "SERVICES", "CASE STUDIES", "WORKFLOW"].map(
              (item, index) => (
                <li key={index} className="navLinkItem">
                  <a href={`#${item.toLowerCase()}`} className="navLinkText">
                    {`:${item}`}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        {/* 
        <div className={`middle-section ${menuOpen ? "open" : ""}`}>
          <ul className="navLinks">
            {["HOME", "ABOUT", "SERVICES", "CASE STUDIES", "WORKFLOW"].map(
              (item, index) => (
                <li key={index} className="navLinkItem">
                  <a href={`#${item.toLowerCase()}`} className="navLinkText">
                    {`:${item}`}
                  </a>
                </li>
              )
            )}
          </ul>
        </div> */}

        {/* Sidebar */}
        <div
          className={`osodod  bg-bl top-0 right-0  w-full  text-white shadow-lg transform transition-transform duration-300 ease-in-out absolute ${
            menuOpen ? "translate-x-0 open" : "translate-x-full"
          }`}
        >
          <div className="heads-s" onClick={() => setMenuOpen(false)}>
            <NavLink to="/" className="logo mar">
              <img className="appLogo " src={appLogo} alt="App Logo" />
            </NavLink>
            <h3>Progressive AI</h3>

            <svg
              onClick={toggleMenu}
              className="croess"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.99908 6.9394L14.4688 0.469727L15.5294 1.53039L9.05974 8.00006L15.5294 14.4697L14.4688 15.5304L7.99908 9.06072L1.52941 15.5304L0.46875 14.4697L6.93842 8.00006L0.46875 1.53039L1.52941 0.469727L7.99908 6.9394Z"
                fill="white"
              />
            </svg>
          </div>

          <div className={`middle-side ${menuOpen ? "open" : ""}`}>
            <ul className="navLinks" style={{ display: "block" }}>
              {["HOME", "ABOUT", "SERVICES", "CASE STUDIES", "WORKFLOW"].map(
                (item, index) => (
                  <>
                    <li key={index} className="navLinkItem">
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="navLinkText"
                      >
                        {`:${item}`}
                      </a>
                    </li>
                    <br />
                  </>
                )
              )}
            </ul>
          </div>
        </div>

        <div className={`button-container  ${menuOpen ? "hidden" : ""}`}>
          <button className="corner-button">
            <span>Test Button</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
