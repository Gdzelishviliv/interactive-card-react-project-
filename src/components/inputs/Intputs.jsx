import React from "react";
import "./inputs.css";

const Intputs = () => {
  return (
    <div className="inputs-container">
      <label htmlFor="Cardholder Name">Cardholder Name</label>
      <input type="text" placeholder="e.g. Jane Appleseed" />
      <label htmlFor="Card Number">Card Number</label>
      <input type="number" placeholder="e.g. 1234 5678 9123 0000" />
      <div className="exp-date-cvc">
        <div className="month-year">
          <label htmlFor="Exp. Date (MM/YY)">Exp. Date (MM/YY)</label>
          <div className="mm-yy">
            <input type="number" placeholder="MM" />
            <input type="number" placeholder="YY" />
          </div>
        </div>
        <div className="cvc-div">
          <label htmlFor="CVC">CVC</label>
          <input type="number" placeholder="e.g. 123" id="cvc-inp" />
        </div>
      </div>
      <button className="confirm-btn">Confirm</button>
    </div>
  );
};

export default Intputs;
