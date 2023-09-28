import React from "react";
import Layout from "./../components/Layout/Layout";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <br />
      <br />
      <br />
      <div className="row contactus m-3 ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct & us feel free to Contact anytime we 24X7
            vaialible
          </p>
 
          <form action="https://formspree.io/f/{form_xexonehelp@gmail.com}" method="post">
            <h4 className="title">Contact Now</h4>
            <div className="mb-3">
              <input
                type="text" 
                className="form-control"
                id="exampleInputText1"
                placeholder="Enter Your Name"
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              <input
                type="email" 
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text" 
                className="form-control"
                id="exampleInputText1"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text" 
                className="form-control"
                id="exampleInputText1"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                name="text"
                cols="55"
                rows="2"
                placeholder="Message for Us"
                id="exampleInputText1"
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Send
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Contact;
