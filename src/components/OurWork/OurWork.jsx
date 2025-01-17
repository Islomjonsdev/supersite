import React from "react";
import { Link } from "react-router-dom";
import Our from "../ui/Our/Our";
import "./OurWork.scss";

const OurWork = () => {
  return (
    <section className="our">
      <div className="container">
        <div className="our_header">
          <Our title={"НАШИ РАБОТЫ"} />
        </div>
        <div className="our_link">
          <Link to={"/"}>Смотреть все работы</Link>
        </div>
        <div className="out_client">
          <Our title={"НАШИ КЛИЕНТЫ"} />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
