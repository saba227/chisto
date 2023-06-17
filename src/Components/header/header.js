import "./header.css";
import logoImg from "../../images/logo.png";
import { Link } from "react-scroll";
import { useState } from "react";

const storageSeclectValue = sessionStorage.getItem("languageChanger");
const handle = (e) => {
  sessionStorage.setItem("languageChanger", e.target.value);
  window.location.reload(false);
};

const MenuIcon = (props) => {
  return (
    <div className="menuIcon" onClick={() => props.onToggle()}>
      <div className={props.showMbMn ? "divOneActive" : undefined}></div>
      <div className={props.showMbMn ? "divTwoActive" : undefined}></div>
      <div className={props.showMbMn ? "divTreeActive" : undefined}></div>
    </div>
  );
};

const WebMenu = (props) => {
  return (
    <div className="menuBar">
      <ul>
        <li>
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {props.translation("menu.service")}
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {props.translation("menu.about")}
          </Link>
        </li>
        <li>
          <Link to="footer" spy={true} smooth={true} offset={50} duration={500}>
            {props.translation("menu.contact")}
          </Link>
        </li>
      </ul>
      <select onChange={handle} defaultValue={storageSeclectValue}>
        <option value="geo">GEO</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};

const MobileMenu = (props) => {
  return (
    <div
      className={props.showMbMn ? "mobileMenuBar menuActive" : "mobileMenuBar"}
    >
      <ul>
        <li>
          <Link
            onClick={() => props.onToggle()}
            to="service"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {props.translation("menu.service")}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => props.onToggle()}
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {props.translation("menu.about")}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => props.onToggle()}
            to="footer"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {props.translation("menu.contact")}
          </Link>
        </li>
      </ul>
      <select onChange={handle} defaultValue={storageSeclectValue}>
        <option value="geo">GEO</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};

const Header = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div>
      <header>
        <div className="logo">
          <Link to="home" spy={true} smooth={true} offset={-80} duration={500}>
            <img src={logoImg} />
          </Link>
        </div>
        <WebMenu translation={props.translation} />
        <MenuIcon
          onToggle={() => setShowMobileMenu(!showMobileMenu)}
          showMbMn={showMobileMenu}
        />
      </header>
      <MobileMenu
        onToggle={() => setShowMobileMenu(false)}
        showMbMn={showMobileMenu}
        translation={props.translation}
      />
    </div>
  );
};

export default Header;
