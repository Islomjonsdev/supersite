import React from "react";
import { Link } from "react-router-dom";
import "./Voucher.scss";

const Voucher = () => {
  return (
    <section className="voucher">
      <div className="container">
        <div className="voucher_wrapper">
          <div className="voucher_btn">
            <button>top</button>
          </div>
          <h1>Получили ваучер на 500.000 сум?</h1>
          <div className="voucher_text">
            <p>
              Заполните заявку и получите ваучер на 500.000 сум на любую услугу!
            </p>
          </div>
          <Link className="voucher_link">Получили ваучер</Link>
        </div>
      </div>
    </section>
  );
};

export default Voucher;
