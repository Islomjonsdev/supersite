import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import FooterContact from "./FooterContact/FooterContact";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_blog">
            <h2>Навигация</h2>
            <ul>
              <li>
                <Link to={"/"}>О нас</Link>
              </li>
              <li>
                <Link to={"/"}>Услуги</Link>
              </li>
              <li>
                <Link to={"/"}>Портфолио</Link>
              </li>
              <li>
                <Link to={"/"}>Блог</Link>
              </li>
            </ul>
            <span>© Supersite 2022</span>
          </div>

          <div className="footer_branches">
            <div>
              <h4>Ташкент</h4>
              <p>Юнусабад, ул. Амира Темура, стройцентр, 2 этаж</p>
            </div>
            <div>
              <h4>Санкт-Петербург</h4>
              <p>Академика Павлова 5А Ривер Хаус 2 этаж</p>
            </div>
          </div>

          <div className="footer_branches1">
            <div>
              <h4>Cамарканд</h4>
              <p>info@supersite.uz Самарканд, Мирсаид барака улица , 20-уй</p>
            </div>
            <a href="/">Скачать онлайн каталог</a>
          </div>
          <div>
            <FooterContact />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
