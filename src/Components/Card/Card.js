import React from "react";
import chewyAudio from "../../assets/Chewbacca roar.mp3";
import haveYouAudio from "../../assets/I have you now.mp3";
import strongAudio from "../../assets/Strong with the force.mp3";
import "./Card.css";

const Card = props => {
  const personCard = () => {
    return (
      <div
        className="card person-card"
        onClick={() => props.favorites(props.itemData)}
      >
        <div className="card-background" />
        <h3 className="card-name">
          {" "}{props.itemData.name}{" "}
        </h3>
        <p className="species">
          {props.itemData.species}
        </p>
        <p className="homeworld">
          {props.itemData.homeworld}
        </p>
        <p className="population">
          {props.itemData.population}
        </p>
        <audio className="background-audio" autoPlay>
          <source src={chewyAudio} />
        </audio>
      </div>
    );
  };

  const vehicleCard = () => {
    return (
      <div
        className="card vehicle-card"
        onClick={() => props.favorites(props.itemData)}
      >
        <div className="card-background" />
        <h3 className="vehicle-name">
          {props.itemData.name}
        </h3>
        <p className="model">
          {props.itemData.model}
        </p>
        <p className="vehicle-class">
          {props.itemData.vehicle_class}
        </p>
        <p className="passenger-count">
          {props.itemData.passengers}
        </p>
        <audio className="background-audio" autoPlay>
          <source src={haveYouAudio} />
        </audio>
      </div>
    );
  };

  const planetCard = () => {
    return (
      <div
        className="card planet-card"
        onClick={() => props.favorites(props.itemData)}
      >
        <div className="card-background" />
        <h3 className="planet-name">
          {props.itemData.name}
        </h3>
        <p className="terrain">
          {props.itemData.terrain}
        </p>
        <p className="population">
          {props.itemData.population}
        </p>
        <p className="climate">
          {props.itemData.climate}
        </p>
        <p className="residence">residence</p>
        <audio className="background-audio" autoPlay>
          <source src={strongAudio} />
        </audio>
      </div>
    );
  };
  // use switch case
  if (props.itemData.model) {
    return vehicleCard();
  }

  if (props.itemData.climate) {
    return planetCard();
  }

  if (props.itemData.species) {
    return personCard();
  }
};

export default Card;
