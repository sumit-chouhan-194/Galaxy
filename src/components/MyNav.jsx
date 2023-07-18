import React from "react";
import logo from "../assets/images/png/nav-logo.png";
const MyNav = () => {
  return (
    <>
      <nav className="bg_darkpurple">
        <div className="container">
          <div>
            <img className="w-auto" src={logo} alt="logo" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNav;
