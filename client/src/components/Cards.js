import React from "react";
import CardItem from "./CardItem";
import card from '../assets/images/nurse.jpg';
import photo from '../assets/images/nurses.jpg';
import "../styles/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Case Management</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src={card}
            text="nurse helping patient"
            label="Nurse"
            path="/services"
            />
            <CardItem 
            src={photo}
            text="nurse helping patient"
            label="Nurse"
            path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
            src={card}
            text="nurse helping patient"
            label="Nurse"
            path="/services"
            />
            <CardItem 
            src={photo}
            text="nurse helping patient"
            label="Nurse"
            path="/services"
            />
             <CardItem 
            src={photo}
            text="nurse helping patient"
            label="Nurse"
            path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
