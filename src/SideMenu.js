import React from "react";
import "./SideMenu.css";
import { useStateValue } from "./StateProvider";

function SideMenu() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="sidemenu">
      <div className="sidemenu__header">
        <h2>Hello, {!user ? "Guest" : user?.email}</h2>
      </div>
      <div className="sidemenu__ListContainer">
        <h3>Trending</h3>
        <ul className="sidemenu__List">
          <li className="sidemenu__ListItem">Best Sellers</li>
          <li className="sidemenu__ListItem">New Releases</li>
          <li className="sidemenu__ListItem">Movers and Shakers</li>
        </ul>
      </div>

      <div className="sidemenu__ListContainer">
        <h3>Digital Content And Device</h3>
        <ul className="sidemenu__List">
          <li className="sidemenu__ListItem">Echo & Alexa</li>
          <li className="sidemenu__ListItem">Fire TV</li>
          <li className="sidemenu__ListItem">Kindle E-Readers & eBooks</li>
          <li className="sidemenu__ListItem">Audible Audiobooks</li>
          <li className="sidemenu__ListItem">Amazon Prime Video</li>
          <li className="sidemenu__ListItem">Amazon Prine Music</li>
        </ul>
      </div>

      <div className="sidemenu__ListContainer">
        <h3>Shop By Department</h3>
        <ul className="sidemenu__List">
          <li className="sidemenu__ListItem">Mobiles, Computers</li>
          <li className="sidemenu__ListItem">TV, Appliancces, Electronics</li>
          <li className="sidemenu__ListItem">Men's Fashion</li>
          <li className="sidemenu__ListItem">Women's Fashion</li>
          <li className="sidemenu__ListItem">See All</li>
        </ul>
      </div>

      <div className="sidemenu__ListContainer">
        <h3>Programs & Features</h3>
        <ul className="sidemenu__List">
          <li className="sidemenu__ListItem">Gift Cards & Mobile Recharges</li>
          <li className="sidemenu__ListItem">Flight Tickets</li>
          <li className="sidemenu__ListItem">Full Store Directory</li>
        </ul>
      </div>

      <div className="sidemenu__ListContainer">
        <h3>Help & Settings</h3>
        <ul className="sidemenu__List">
          <li className="sidemenu__ListItem">Your Account</li>
          <li className="sidemenu__ListItem">Customer Service</li>
          <li className="sidemenu__ListItem">Sign Out</li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
