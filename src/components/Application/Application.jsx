import React from "react";
import { useState } from "react";
import "./Application.scss";

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
        <div>
          {tab === "Зaявка по ваучеру" && <div>Зaявка по ваучеру</div>}

          {tab === "связаться с нами" && <div>связаться с нами</div>}
        </div>
      </div>
    </section>
  );
};

export default Application;
