import React from "react";
import "./confirm.css";

const Confirmed = ({ onContinue }) => {
  const handleContinue = () => {
    onContinue();
  };
  return (
    <div className="thank-you-container">
      <div className="submited-logo"></div>
      <h1>THANK YOU!</h1>
      <p>We’ve added your card details</p>
      <button className="confirm-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default Confirmed;
