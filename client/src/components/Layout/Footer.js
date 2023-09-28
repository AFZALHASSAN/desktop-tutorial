import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsQuora } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Footer = () => { 
  const handleLinkClickFB = () => {
    window.open("", "_blank");
  };
  const handleLinkClickYT = () => {
    window.open("", "_blank");
  };
  const handleLinkClickPN = () => {
    window.open("", "_blank");
  };
  const handleLinkClickIN = () => {
    window.open("", "_blank");
  };
  const handleLinkClickQU = () => {
    window.open("", "_blank");
  };
  return (
    <div className="footer">
      <p style={{ textAlign: "center" }}>
        Welcome to
        <a href="/" style={{ textDecoration: "none" }}>
          Xexone.com,
        </a>
        your ultimate destination for affiliate recommendations. Our team of
        experts diligently researches and tests products, ensuring you make
        informed buying decisions. With our comprehensive reviews and valuable
        advice, we empower you to find the perfect products effortlessly. From
        electronics to fashion, home essentials to fitness gear, Xexone.com is
        your trusted companion in making smart purchases. Join our community now
        and gain unlimited access to our powerful resources. Experience the
        power of informed shopping at Xexone.com and unlock a world
        of possibilities.
      </p>
      <h1 className="text-center">All Right Reserved &copy; xexone.come</h1>
      <p className="text-center mt-3">
        <Link to="/about">About Us</Link>|<Link to="/contact">Contact Us</Link>|
        <Link to="/policy">Privacy Policy</Link>|
        <Link to="/TermCondition">Terms & Condition</Link>|
        <Link to="/Sale-at-Xexone">Sale at Xexone</Link>|
        <Link to="/Team">Our Team</Link>|<Link to="/Blog">Blogs</Link>
      </p>
      <dive className="text-center mt-3  ">
        <p>
          <NavLink className="p-2 font-1 " onClick={handleLinkClickFB}>
            <BsFacebook />
          </NavLink>
          <NavLink className="p-2 font-1 " onClick={handleLinkClickPN}>
            <BsPinterest />
          </NavLink>
          <NavLink className="p-2 font-1 " onClick={handleLinkClickYT}>
            <BsYoutube />
          </NavLink>
          <NavLink className="p-2 font-1 " onClick={handleLinkClickIN}>
            <AiFillInstagram />
          </NavLink>
          <NavLink className="p-2 font-1 " onClick={handleLinkClickQU}>
            <BsQuora />
          </NavLink>
        </p>
      </dive>
    </div>
  );
};

export default Footer;
