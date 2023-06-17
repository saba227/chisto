import "./firstBaner.css";
import banerImg from "../../images/baner.png";
import { Link } from "react-scroll";

const FirstBaner = (props) => {
  return (
    <div className="banerCnt" id="home">
      <div className="firstBaner">
        <div className="firstBanerCont">
          <div className="firstBanerText">
            <h1>{props.translation("firstBaner.h1text1")}</h1>
            <h2>{props.translation("firstBaner.h1text2")}</h2>
            <h2>{props.translation("firstBaner.h1text3")}</h2>
            <br />
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="startBtn"
            >
              {props.translation("firstBaner.startbutton")}
            </Link>
          </div>
        </div>
        <div className="baner">
          <img src={banerImg} />
        </div>
      </div>
    </div>
  );
};

export default FirstBaner;
