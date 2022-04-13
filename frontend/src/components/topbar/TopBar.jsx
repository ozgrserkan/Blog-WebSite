import "./topbar.css";

import React from "react";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fa-brands fa-facebook-square topIcon"></i>
        <i className="fa-brands fa-twitter topIcon"></i>
        <i className="fa-brands fa-instagram topIcon"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          className="topImage"
        />
        <i className="fa-solid fa-magnifying-glass topSearchIcon"></i>
      </div>
    </div>
  );
};

export default TopBar;
