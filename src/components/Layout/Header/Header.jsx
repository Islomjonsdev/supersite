import "./Header.scss";
import { Link } from "react-router-dom";
import Links from "../../ui/Links/Links";
import hamburgerIcon from "../../../assets/svg/hamburger.svg";
import logo from "../../../assets/icons/logo.svg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "../../ui/Modal/Modal";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClosePupop = () => {
      setIsOpenModal(false)
  }
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
    <>
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
              <button
                className="header_btn"
                onClick={() => setIsOpenModal(true)}
              >
                <img src={hamburgerIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {isOpenModal && (
        <Modal close={setIsOpenModal}>
          <div className="modal_body">
            <div>
              <button onClick={() => setIsOpenModal(false)}>
                  <IoMdClose />
              </button>
            </div>

            <ul>
              {navLinks?.map((linksItem, id) => (
                <li key={id}>
                  <Link onClick={handleClosePupop} to={linksItem?.to}>{linksItem?.name}</Link>
                </li>
              ))}
            </ul>
            <Link className="header_modal_contact" to={"tel:+998998107090"}>+99899 810-70-90</Link>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Header;
