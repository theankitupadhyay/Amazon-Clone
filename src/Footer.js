import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FooterEnd from "./FooterEnd";
import FooterTable from "./FooterTable";
import SubOptions from "./SubOptions";
import SubOptions2 from "./SubOptions2";

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <div className="backToTop">
          <p>Back To Top</p>
        </div>
      </Link>

      <div className="footer__options">
        <div className="footer__options1">
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div>
        <div className="footer__options2">
          <h3>Connect with Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer__options3">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="footer__options4">
          <h3>Let Let Us Help You</h3>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__suboptions">
        <Link to="/">
          <div className="footer__suboptionsLogo">
            <img
              src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
              alt=""
            />
          </div>
        </Link>

        <SubOptions />
      </div>
      <div className="footer__suboptions2">
        <SubOptions2 />
      </div>
      <div className="footer__table">
        <FooterTable />
      </div>
      <div className="footer__end">
        <FooterEnd />
      </div>
    </div>
  );
}

export default Footer;
