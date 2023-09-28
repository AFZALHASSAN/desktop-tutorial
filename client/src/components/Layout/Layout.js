import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import NavBaar from "./NavBaar"; 
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="description" />
        <meta name="keywords" content="keywords" />
        <meta name="author" content="author" />
        <title></title>
      </Helmet>
      <Header />
      <NavBaar/> 
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <br />
      <Footer />
    </>
  );
};

export default Layout;
