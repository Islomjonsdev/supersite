import "./Services.scss";
import { useState } from "react";
import { accardiondata } from "../../api";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineChevronUp } from "react-icons/hi";
import Card from "./Card/Card";

const Services = () => {
  const [collapse, setCollapse] = useState(false);
  const openToogle = (id) => {
    if (collapse === id) {
      return setCollapse((prevId) => (prevId === id ? null : id));
    } else {
      setCollapse(id);
    }
  };
  return (
    <section className="services">
      <div className="container">
        <div className="services_header">
          <h3>Услуги</h3>
        </div>
        <div className="services_info">
        <div className="services_list">
          {accardiondata?.map((item, id) => (
            <div className="services_item" key={id} onClick={() => openToogle(id)}>
              <div className="services__header">
                <p>{item?.title}</p>
                <span>
                  {collapse === id ? <HiOutlineChevronUp /> : <FaAngleDown />}
                </span>
              </div>

              <div
                className={
                  collapse === id ? "services__body show" : "services__body"
                }
              >
                <div>
                  <p>{item?.body1}</p>
                </div>
                <div>
                  <p>{item?.body2}</p>
                </div>
                <div>
                  <p>{item?.body3}</p>
                </div>
                <div>
                  <p>{item?.body4}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Card />
        </div>
      </div>
    </section>
  );
};

export default Services;
