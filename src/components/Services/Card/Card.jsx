import "./Card.scss";
import { useState } from "react";
import { accardiondata2 } from "../../../api/index";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineChevronUp } from "react-icons/hi";

const Card = () => {
  const [collapse, setCollapse] = useState(false);
  const openToogle = (id) => {
    if (collapse === id) {
      return setCollapse((prevId) => (prevId === id ? null : id));
    } else {
      setCollapse(id);
    }
  };
  return (
    <section className="card">
        <div className="card_list">
          {accardiondata2?.map((item, id) => (
            <div className="card_item" key={id} onClick={() => openToogle(id)}>
              <div className="card_header">
                <p>{item?.title}</p>
                <span>
                  {collapse === id ? <HiOutlineChevronUp /> : <FaAngleDown />}
                </span>
              </div>

              <div
                className={
                  collapse === id ? "card_body show" : "card_body"
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
    </section>
  );
};

export default Card;
