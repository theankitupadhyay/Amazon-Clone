import React, { useState } from "react";
import { ModalBody, Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import SideMenu from "./SideMenu";
import "./Subheader.css";
import toggler from "./toggler.svg";

function Subheader() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  if (SideMenu != isActive) {
    const body = {
      overflow: "hidden",
    };
  }
  return (
    <div className="subheader">
      <div className={`sideMenu ${!isActive ? "sideMenu__active" : ""}`}>
        <div className="sideMenu__container">
          <SideMenu />
        </div>
        <button onClick={handleToggle} className="sideMenu__button">
          X
        </button>
      </div>
      <ul className="subheader__optionList ">
        <li className="subheader__option toggler">
          <button className="toggler__button" onClick={handleToggle}>
            All
          </button>
        </li>
        <li className="subheader__option">Kindle eBooks</li>
        <li className="subheader__option">Prime</li>
        <li className="subheader__option">Gift Cards</li>
        <li className="subheader__option">Amazon Pay</li>
        <li className="subheader__option">Gift Ideas</li>
        <li className="subheader__option">Books</li>
        <li className="subheader__option">Pet Supplies</li>
        <li className="subheader__option">Toys & Games</li>
      </ul>

      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
        alt=""
        className="subheader__optionBanner"
      />
    </div>
  );
}

export default Subheader;
