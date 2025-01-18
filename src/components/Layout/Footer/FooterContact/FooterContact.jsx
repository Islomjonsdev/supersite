import React from "react";
import "./FooterContact.scss";
import Links from "../../../ui/Links/Links";

const FooterContact = () => {
  return (
    <ul className="footer_contact">
      <li>
        <a href="tel:+998998107090">+99899 810-70-90</a>
      </li>
      <li>
        <a href="tel:+998998147090">+99899 814-70-90</a>
      </li>
      <li>
        <a href="tel:+998958157090">+99895 815-70-90</a>
      </li>
      <li>
        <Links title={"Связаться с нами"} />
      </li>
    </ul>
  );
};

export default FooterContact;
