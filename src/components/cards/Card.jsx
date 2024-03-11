import React from "react";
import "./card.css";

const Card = ({ cardNumber, cvc, expirationDate, cardHolderName }) => {
  const formattedCardNumber = cardNumber
    .replace(/\s/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
  return (
    <div className="card-container">
      <div className="card-back-side">
        <div className="card-back-line"></div>
        <div className="card-cvc-section">
          <div className="cvc-container">
            <span className="cvc">{cvc}</span>
          </div>
        </div>
        <div className="card-backside-picture"></div>
        <div className="card-front-side">
          <div className="card-icn"></div>
          <h3 className="card-number">{formattedCardNumber}</h3>
          <div className="expiration-date-section">
            <h4>{cardHolderName}</h4>
            <span>{expirationDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
const first = (second) => {
  third;
};
