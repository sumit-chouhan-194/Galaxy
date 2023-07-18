import React from "react";
import logo from "../assets/images/png/nav-logo.png";
const MyNav = () => {
  return (
    <>
      <nav className="bg_darkpurple">
        <div className="container mx-auto">
          <div>
            <img className="w-auto" src={logo} alt="logo" />
          </div>
          <div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNav;
