import React from "react";
import "../styles/SaleAtXexone.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { SlActionUndo } from "react-icons/sl";
import { Link } from "react-router-dom";
import logo from "./Layout/favicon.png";
import Footer from "./Layout/Footer";
const SaleAtXexone = () => {
  return (
    <>
      <div className="top_banner">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} className="logo" alt="" /> XEXONE
            </a>
            <form className="d-flex">
              <Link to="/" style={{ marginRight: "1rem" }}>
                {" "}
                <IoMdArrowRoundBack /> BACK TO SHOPPING
              </Link>
              <Link to="/register">SIGN IN</Link>
            </form>
          </div> 
        </nav>
      </div>

      <div className="banner">
        <h1 className="h1">Hi. How can we help?</h1>
      </div>
      <h2 className="h2"> <a href="/"><SlActionUndo/></a> Business Inquiry & Bulk Orders</h2>
      <div className="info">
        <p className="p">
          <h3 className="h3">I wish to become a seller on xexone</h3> 
          <a href="/"> Fill this form </a> and our
          team will reach you as soon as possible.{" "}
        </p>
        <p>
          <h3>I want to place a bulk order/I have a business query</h3>Please
          email the details of the order you wish to place to
         <a href="Gmail xexonehelp@gmail.com" target="_blank"> xexonehelp@gmail.com </a> with the subject line “Bulk order”.
        </p>
        <p>
          <h3>How do I opt for franchise with xexone</h3> We currently do not
          provide this option
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SaleAtXexone;
