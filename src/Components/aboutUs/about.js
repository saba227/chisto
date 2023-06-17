import "./about.css";
import stafs from "../../images/stafs.png";
import bazisBank from "../../images/bazis.png";
import redison from "../../images/redison.png";
import kerdzo from "../../images/kerdo.png";
import tbc from "../../images/tbc.png";
import prokredit from "../../images/prokredit.png";
import sastumro from "../../images/sastumro.png";
import hualing from "../../images/hualing.png";
import binebi from "../../images/binebi.png";
import orbi from "../../images/orbi.png";
import orioni from "../../images/orioni.png";
import sabagiro from "../../images/sabagiro.png";

const About = (props) => {
  return (
    <div className="aboutCnt" id="about">
      <FirstPage />
      <SecondPage />
    </div>
  );
};

const FirstPage = (props) => {
  return (
    <div className="expCnt">
      <div className="expAge">
        <h2>12 წლიანი სამუშაო გამოცდილება</h2>
      </div>
      <div className="aboutInfo">
        <div className="stafImg">
          <img src={stafs} />
        </div>
        <div className="stafInfo">
          <h2>ჩვენ ვზრუნავთ თქვენზე</h2>
          <p>
            10 გვერდია, ეს გავლენას არ ახდენს საიტის პერფორმანსზე? ნაცვლად ამისა
            ეს 10 გვერდი ნაწილ ნაწილ ჩატვირთულიყო იმის მიხედვით კლიენტი რომელი
            გვერდის ლინკზეც გადავიდოდა და არა ასე ერთიანად, ათივე გვერდის 10
            გვერდია, ეს გავლენას არ ახდენს საიტის პერფორმანსზე? ნაცვლად ამისა ეს
            10 გვერდი ნაწილ ნაწილ ჩატვირთულიყო იმის მიხედვით კლიენტი რომელი
            გვერდის ლინკზეც გადავიდოდა და არა ასე ერთიანად, ათივე გვერდის
          </p>
          <br></br>
          <h2>ჩვენ ვზრუნავთ თქვენზე</h2>
          <p>
            10 გვერდია, ეს გავლენას არ ახდენს საიტის პერფორმანსზე? ნაცვლად ამისა
            ეს 10 გვერდი ნაწილ ნაწილ ჩატვირთულიყო იმის მიხედვით კლიენტი რომელი
            გვერდის ლინკზეც გადავიდოდა და არა ასე ერთიანად, ათივე გვერდის 10
            გვერდია, ეს გავლენას არ ახდენს საიტის პერფორმანსზე? ნაცვლად ამისა ეს
            10 გვერდი ნაწილ ნაწილ ჩატვირთულიყო იმის მიხედვით კლიენტი რომელი
            გვერდის ლინკზეც გადავიდოდა და არა ასე ერთიანად, ათივე გვერდის
          </p>
        </div>
      </div>
    </div>
  );
};

const SecondPage = (props) => {
  return (
    <div className="partnerCnt">
      <div className="partnerCount">
        <h2>500 ზე მეტი კმაყოფილი მომხმარებელი</h2>
      </div>
      <div className="partnerLogo">
        <IconSlider />
      </div>
    </div>
  );
};

const IconSlider = () => {
  return (
    <div className="iconSlideContainer">
      <div className="slideItems">
        <div className="item">
          <img src={bazisBank} />
        </div>
        <div className="item">
          <img src={redison} />
        </div>
        <div className="item">
          <img src={kerdzo} />
        </div>
        <div className="item">
          <img src={tbc} />
        </div>
        <div className="item">
          <img src={prokredit} />
        </div>
        <div className="item">
          <img src={sastumro} />
        </div>
        <div className="item">
          <img src={hualing} />
        </div>
        <div className="item">
          <img src={binebi} />
        </div>
        <div className="item">
          <img src={orbi} />
        </div>
        <div className="item">
          <img src={orioni} />
        </div>
        <div className="item">
          <img src={sabagiro} />
        </div>
      </div>

      <div className="slideItems">
        <div className="item">
          <img src={bazisBank} />
        </div>
        <div className="item">
          <img src={redison} />
        </div>
        <div className="item">
          <img src={kerdzo} />
        </div>
        <div className="item">
          <img src={tbc} />
        </div>
        <div className="item">
          <img src={prokredit} />
        </div>
        <div className="item">
          <img src={sastumro} />
        </div>
        <div className="item">
          <img src={hualing} />
        </div>
        <div className="item">
          <img src={binebi} />
        </div>
        <div className="item">
          <img src={orbi} />
        </div>
        <div className="item">
          <img src={orioni} />
        </div>
        <div className="item">
          <img src={sabagiro} />
        </div>
      </div>
    </div>
  );
};

export default About;
