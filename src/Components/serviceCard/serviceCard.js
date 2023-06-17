import "./serviceCard.css";
import { useState } from "react";
import Box from "./serviceCardBox";
import imgCarpet from "../../images/carpet.svg";
import imgGlass from "../../images/glass.svg";
import imgSofa from "../../images/sofa.svg";
import imgCleaning from "../../images/cleaning.svg";
import imgBad from "../../images/bad.svg";
import imgChear from "../../images/chear.svg";

const ServiceCards = (props) => {
  const [showOrder, setShowOrder] = useState(false);
  const [titleName, settiTleName] = useState(null);

  const orderServices = (event) => {
    setShowOrder(true);
    settiTleName(event.target.parentNode.firstChild.innerText);
  };

  const cardInfo = [
    {
      id: 1,
      title: props.translation("cards.carpetTitle"),
      price: `5 ${props.translation("cards.cost")}`,
      mainText: props.translation("cards.carpetText"),
      btn: props.translation("cards.button"),
      img: imgCarpet,
    },
    {
      id: 2,
      title: props.translation("cards.furnitureCleaningTitle"),
      price: `5 ${props.translation("cards.cost")}`,
      mainText: props.translation("cards.furnitureCleaningText"),
      btn: props.translation("cards.button"),
      img: imgSofa,
    },
    {
      id: 3,
      title: props.translation("cards.bedClneaningTitle"),
      price: `5 ${props.translation("cards.cost")}`,
      mainText: props.translation("cards.bedClneaningText"),
      btn: props.translation("cards.button"),
      img: imgBad,
    },
    {
      id: 4,
      title: props.translation("cards.glassCleaningTitle"),
      price: `5 ${props.translation("cards.cost")}`,
      mainText: props.translation("cards.glassCleaningText"),
      btn: props.translation("cards.button"),
      img: imgGlass,
    },
    {
      id: 5,
      title: props.translation("cards.homeCleaningTitle"),
      price: `5 ${props.translation("cards.cost")}`,
      mainText: props.translation("cards.homeCleaningText"),
      btn: props.translation("cards.button"),
      img: imgChear,
    },
    {
      id: 6,
      title: props.translation("cards.officeCleaningTitle"),
      price: `5 ${props.translation("cards.cost")}`,
      mainText: props.translation("cards.officeCleaningText"),
      btn: props.translation("cards.button"),
      img: imgCleaning,
    },
  ];

  const cards = cardInfo.map((card) => {
    return (
      <div key={card.id} className="card">
        <div className="imgCnt">
          <img src={card.img} />
        </div>
        <div className="textCnt">
          <h3>{card.title}</h3>
          <h4>{card.price}</h4>
          <p>{card.mainText}</p>
          <button onClick={orderServices}>{card.btn}</button>
        </div>
      </div>
    );
  });

  return (
    <div className="container" id="service">
      <h2>სერვისები</h2>
      <div className="cardContainer">{cards}</div>
      {showOrder && (
        <Box
          onClose={() => setShowOrder(false)}
          titleName={titleName}
          translation={props.translation}
        />
      )}
    </div>
  );
};

export default ServiceCards;
