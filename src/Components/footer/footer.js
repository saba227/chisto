import "./footer.css";
import logoImg from "../../images/logo.png";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = (props) => {
  const currYear = new Date().getFullYear();
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_1z993vc",
      "template_bhz7g6m",
      form.current,
      "Ud3Pi-zJAPITLXiCn"
    );
    e.target[0].value = "";
  };

  return (
    <footer id="footer">
      <div className="footerCnt">
        <div className="footerLogo">
          <img src={logoImg} />
          <p>სხვები აბიმძურებენ ჩვენ ვასუფთავებთ</p>
        </div>
        <div className="footerForm">
          <p>მოგვწერე შენი სააკონტაქტო ნომერი სიახლეების მისაღებად.</p>
          <form ref={form} onSubmit={handleSubmit}>
            <input name="tel" type="tel" pattern="[0-9]{9,9}" required />
            <input type="submit" value="გაგზავნა" />
          </form>
        </div>
        <div className="socIcons">
          <h4>გამოგვყევი</h4>
          <div>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/chistobatumi">
              <FaFacebookF />
            </a>
            <a href="https://www.tiktok.com/@chistocompany">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="phoneNum">
          <h4>დაგვირეკე</h4>
          <a href="tel:597-94-92-21">
            <BsTelephone />
            597-94-92-21
          </a>
        </div>
      </div>
      <p className="security">
        © {currYear} ყველა უფლება დაცულია. შექმნილია
        <a href="http://liftup.ge">liftup</a> ის მიერ.
      </p>
    </footer>
  );
};

export default Footer;
