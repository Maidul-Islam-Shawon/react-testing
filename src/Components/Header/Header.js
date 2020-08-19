import React from "react";
import "./HeaderStyle.scss";
import logo from "../../Assets/ReactTesting-logo.png";

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoImg" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
