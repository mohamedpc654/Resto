import React from "react";
import logo2 from "../img/log3.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Header() {
  const scrollLinkStyle = {
    cursor: "pointer"
  };
  return (
    <header>
      <h1>
        <img src={logo2} alt="" width={200} height={100} />
      </h1>
      <nav className="menu">
        <ul>
          <ScrollLink to="mainsec" smooth={true} style={scrollLinkStyle}>
            Home
          </ScrollLink>
        </ul>
        <ul>
          <ScrollLink to="Menu" smooth={true} style={scrollLinkStyle}>
            Menu
          </ScrollLink>
        </ul>
        <ul>
          <ScrollLink to="contact" smooth={true} style={scrollLinkStyle}>
            Contact Us
          </ScrollLink>
        </ul>
        <ul>
          <ScrollLink to="about" smooth={true} style={scrollLinkStyle}>
            About Us
          </ScrollLink>
        </ul>
      </nav>
      <ScrollLink style={scrollLinkStyle} to="res" smooth={true}>
        <input type="button" value="BOOK A TABLE" />
      </ScrollLink>
    </header>
  );
}

export default Header;
