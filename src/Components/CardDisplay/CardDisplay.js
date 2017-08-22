import React from "react";
import "./CardDisplay.css";
import Card from "../Card/Card";

const CardDisplay = ({ itemData }) => {
  let itemCard;

  if (itemData) {
    itemCard = itemData.map((el, i) => <Card key={i} itemData={el} />);
  }

  return (
    <div className="outer-card-container">

      <section className="card-container">
        {itemCard}
        <div className="card-container-spacer"></div>
      </section>
      <div className="card-container-spacer"></div>

    </div>
  );
};

export default CardDisplay;
