import React from "react";
import logo from "../../assets/Logo.svg";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="fixed top-0 w-screen px-[46px]">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <div className="desktop hidden md:flex">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">My Works</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mobile"></div>
        </div>
      </nav>
    );
  }
}
