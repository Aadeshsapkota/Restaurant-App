import React from "react";
import "../css/Footer.css"
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="section1">
          <h1 className="company-name">StayVia</h1>
          <p>@2026 Stayvia.inc</p>
          <p>All Rights Reserved</p>
        </div>

        <div className="section2">
          <h3 className="features">Features</h3>
          <p>Fast Delivery</p>
          <p>Quality Service</p>
        </div>

        <div className="section3">
          <h3 className="company">Company</h3>
          <p>About</p>
          <p>How it Works</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="section4">
          <h3 className="legal">Legal</h3>
          <p>About</p>
          <p>MSA</p>
          <p>Private Policy</p>
        </div>

        <div className="section5">
          <h3 className="socials">Socials</h3>
          <a href="https://www.instagram.com" className="fa fa-instagram">
            {" "}
            instagram
          </a>
          <a href="https://www.instagram.com" className="fa fa-facebook">
            {" "}
            facebook
          </a>
          <a href="https://www.instagram.com" className="fa fa-twitter">
            twitter
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
