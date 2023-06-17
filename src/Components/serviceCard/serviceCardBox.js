import "./serviceCardBox.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Box = (props) => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onClose();
    emailjs.sendForm(
      "service_1z993vc",
      "template_bhz7g6m",
      form.current,
      "Ud3Pi-zJAPITLXiCn"
    );
  };

  return (
    <div className="orderServicesCnt">
      <div className="orderServiceCard">
        <div>
          <h3>{props.translation("seriveBuyCard.title")}</h3>
          <button className="closeBtn" onClick={props.onClose}>
            X
          </button>
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="service">
            {props.translation("seriveBuyCard.service")}
          </label>
          <input name="service" defaultValue={props.titleName} />
          <label htmlFor="userName">
            {props.translation("seriveBuyCard.name")}
          </label>
          <input name="userName" type="text" required />
          <label htmlFor="tel">
            {props.translation("seriveBuyCard.number")}
          </label>
          <input name="tel" type="tel" pattern="[0-9]{9,9}" required />
          <button>{props.translation("seriveBuyCard.button")}</button>
        </form>
      </div>
    </div>
  );
};

export default Box;
