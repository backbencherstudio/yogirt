import "./navbar.scss";
import { NavLink } from "react-router-dom";
import appLogo from "../../../assets/image/applogo.png";
import { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";

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
          <div className="heads-s  items-center" style={{background:"rgba(255, 255, 255, 0.08)",paddingTop:"0px"}}>
            <NavLink to="/" className="logo mar">
              <img className="appLogo " src={appLogo} alt="App Logo" />
            </NavLink>
            <h3  style={{marginTop:"0px",fontSize:"24px"}}>Progressive AI</h3>

            <svg
              onClick={toggleMenu}  onClick={() => setMenuOpen(false)}
              className="croess mt-0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none" style={{marginTop:"0px"}}
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
            <div className="button-containerNew mt-6 bg-[#12C6D826] text-[18px] w-[100%] sm:w-[60%] font-[500] m-auto">
                              <div className="corner-buttonNew py-1">
                                <span className="text-[16px] lg:text-[18px] uppercase">Contact Us</span>
                              </div>
                            </div>
                <div className="social-icons flex gap-4 mt-6 justify-center">
                                    <div className="button-containerNew">
                                        <button className="corner-buttonNew">
                                            <a href="" ><span className="p-2" style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}}> < RiFacebookFill className="text-[28px]  text-[#12c6d8]" /> </span></a>
                                        </button>
                                    </div>
                                    <div className="button-containerNew">
                                        <button className="corner-buttonNew">
                                            <a href=""><span className="p-2" style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}}> <GrLinkedinOption  className="text-[28px]  text-[#12c6d8]"/> </span></a>
                                        </button>
                                    </div>
                                    <div className="button-containerNew">
                                        <button className="corner-buttonNew">
                                            <a href=""><span className="p-2" style={{backgroundColor:"rgba(18, 198, 216, 0.15)"}}> <TbBrandInstagramFilled className="text-[28px] text-[#12c6d8]"/> </span></a>
                                        </button>
                                    </div>
                                    
                                   
                                </div>
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
