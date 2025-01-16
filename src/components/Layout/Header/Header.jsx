import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Links from "../../ui/Links/Links";
// import logo from "../../../assets/svg/logo.svg";
import hamburgerIcon from "../../../assets/svg/hamburger.svg"
import logo from "../../../assets/images/logo.png"

const Header = () => {
  const navLinks = [
    {
      name: "Услуги",
      to: "/about",
    },
    {
      name: "Портфолио",
      to: "/about",
    },
    {
      name: "О нас",
      to: "/about",
    },
    {
      name: "Кoманда",
      to: "/about",
    },
    {
      name: "Блог",
      to: "/about",
    },
    {
      name: "Отзывы",
      to: "/about",
    },
  ];
  return (
    <header>
      <div className="container">
        <div className="header_container">
          <Link className="header_log_link" to={"/"}>
            <img src={logo} alt="logo" />
            <p>Supersite</p>
          </Link>
          <ul>
            {navLinks?.map((links, id) => (
              <li key={id}>
                <Link to={links?.to}>{links?.name}</Link>
              </li>
            ))}
          </ul>

          <div>
            <select name="" id="">
              <option value="">Nav</option>
            </select>
            <Links title={"+99899 810-70-90"} />
            <button className="header_btn">
              <img src={hamburgerIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
