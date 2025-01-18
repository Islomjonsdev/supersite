import React from "react";
import { useState } from "react";
import "./ApplicationForm.scss";

const ApplicationForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      comment: comment,
    };
    console.log(data);
  };
  return (
    <form className="application_form" onSubmit={onSubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Ваше имя"
      />
      <input
        onChange={(e) => setComment(e.target.value)}
        type="text"
        placeholder="Комментарий"
      />
      <button>Оставить заявку</button>
    </form>
  );
};

export default ApplicationForm;
