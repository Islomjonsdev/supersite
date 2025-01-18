import React from "react";
import "./ApplicationForm.scss";

const ApplicationForm = () => {
  return (
    <form className="application_form">
      <input type="text" placeholder="Ваше имя" />
      <input type="text" placeholder="Комментарий" />
      <button>Оставить заявку</button>
    </form>
  );
};

export default ApplicationForm;
