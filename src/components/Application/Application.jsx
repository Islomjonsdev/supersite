import React from "react";
import { useState } from "react";
import "./Application.scss";
import ApplicationCall from "./ApplicationCall/ApplicationCall";
import ApplicationVoucher from "./ApplicationVoucher/ApplicationVoucher";

const Application = () => {
  const [tab, setTab] = useState("Зaявка по ваучеру");
  return (
    <section className="application">
      <div className="container">
        <div className="application_btn">
          <button
            className={tab === "Зaявка по ваучеру" ? "active" : ""}
            onClick={() => setTab("Зaявка по ваучеру")}
          >
            Зaявка по ваучеру
          </button>
          <button
            className={tab === "связаться с нами" ? "active" : ""}
            onClick={() => setTab("связаться с нами")}
          >
            связаться с нами
          </button>
        </div>
        <div className="applicatopn_wrapper">
          {tab === "Зaявка по ваучеру" && <ApplicationVoucher />}

          {tab === "связаться с нами" && <ApplicationCall />}
        </div>
      </div>
    </section>
  );
};

export default Application;
