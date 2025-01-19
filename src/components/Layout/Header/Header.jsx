import "./Header.scss";
import { Link } from "react-router-dom";
import Links from "../../ui/Links/Links";
import hamburgerIcon from "../../../assets/svg/hamburger.svg";
import logo from "../../../assets/icons/logo.svg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "../../ui/Modal/Modal";
import i18n from "../../../locales/i18next";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [changeLang, setChangeLang] = useState(i18n.language || "ru");

  const { t } = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setChangeLang(lang);
    setIsActive(false);
  };

  const handleClosePupop = () => {
    setIsOpenModal(false);
  };
  const navLinks = [
    {
      name: t("services"),
      to: "/about",
    },
    {
      name: t("portfolio"),
      to: "/about",
    },
    {
      name: t("aboutUs"),
      to: "/about",
    },
    {
      name: t("team"),
      to: "/about",
    },
    {
      name: t("blog"),
      to: "/about",
    },
    {
      name: t("takl"),
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

            <div className="header_right">
              <div
                className="header_lan_wrapper1"
                onClick={() => setIsActive(!isActive)}
              >
                <div className="header_lan_wrapper">
                  <p>{changeLang.toUpperCase()}</p>
                  {isActive === false ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
                {isActive && (
                  <div className="langs">
                    <div onClick={() => handleChangeLanguage("uz")}>Uz</div>
                    <div onClick={() => handleChangeLanguage("ru")}>Ru</div>
                  </div>
                )}
              </div>
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
                  <Link onClick={handleClosePupop} to={linksItem?.to}>
                    {linksItem?.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="header_modal_contact" to={"tel:+998998107090"}>
              +99899 810-70-90
            </Link>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Header;
