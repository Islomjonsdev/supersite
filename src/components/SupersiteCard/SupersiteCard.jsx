import React from "react";
import { supersiteData } from "../../api";
import "./SupersiteCard.scss";

const SupersiteCard = () => {
  return (
    <section className="supersit_card">
      <div className="container">
        <div className="supersit_card_top">
          <h3>о нас</h3>
        </div>
        <ul className="supersit_card_card">
          {supersiteData?.map((card, id) => (
            <li key={id}>
              <span>{card?.number}</span>
              <p>{card?.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SupersiteCard;
