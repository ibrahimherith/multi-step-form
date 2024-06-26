import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>1</NavLink>
            <div className="link-info">
              <div className="step-num">Step 1</div>
              <div className="step-name">Your info</div>
            </div>
          </li>
          <li>
            <NavLink to={"/plan"}>2</NavLink>
            <div className="link-info">
              <div className="step-num">Step 2</div>
              <div className="step-name">Select plan</div>
            </div>
          </li>
          <li>
            <NavLink to={"/addons"}>3</NavLink>
            <div className="link-info">
              <div className="step-num">Step 3</div>
              <div className="step-name">Add-ons</div>
            </div>
          </li>
          <li>
            <NavLink to={"/summary"}>4</NavLink>
            <div className="link-info">
              <div className="step-num">Step 4</div>
              <div className="step-name">Summary</div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
