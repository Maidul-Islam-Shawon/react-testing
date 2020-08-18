import React from "react";
import "./HeaderStyle.scss";
import logo from "../../Assets/Logo.png";

const Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
