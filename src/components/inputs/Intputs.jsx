// import React from "react";
// import "./inputs.css";

// const Intputs = () => {
//   return (
//     <div className="inputs-container">
//       <label htmlFor="Cardholder Name">Cardholder Name</label>
//       <input type="text" placeholder="e.g. Jane Appleseed" />
//       <label htmlFor="Card Number">Card Number</label>
//       <input type="number" placeholder="e.g. 1234 5678 9123 0000" />
//       <div className="exp-date-cvc">
//         <div className="month-year">
//           <label htmlFor="Exp. Date (MM/YY)">Exp. Date (MM/YY)</label>
//           <div className="mm-yy">
//             <input type="number" placeholder="MM" />
//             <input type="number" placeholder="YY" />
//           </div>
//         </div>
//         <div className="cvc-div">
//           <label htmlFor="CVC">CVC</label>
//           <input type="number" placeholder="e.g. 123" id="cvc-inp" />
//         </div>
//       </div>
//       <button className="confirm-btn">Confirm</button>
//     </div>
//   );
// };

// export default Intputs;
// Intputs.js
// Intputs.js
// Intputs.js
import React, { useState } from "react";
import "./inputs.css";
import Confirmed from "../thankYou/Confirmed";

const Intputs = ({ onUpdateCardInfo }) => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState({
    cardHolderName: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvc: "",
  });
  const [confirmationSuccess, setConfirmationSuccess] = useState(false);

  const validateInputs = () => {
    let isValid = true;
    const newErrors = {
      cardHolderName: "",
      cardNumber: "",
      expirationMonth: "",
      expirationYear: "",
      cvc: "",
    };

    if (!cardHolderName.trim()) {
      newErrors.cardHolderName = "Cardholder name is required";
      isValid = false;
    }

    if (!cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
      isValid = false;
    } else if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Wrong format, numbers only";
      isValid = false;
    }

    if (!expirationMonth.trim() || !expirationYear.trim()) {
      newErrors.expirationMonth = "Can’t be blank";
      isValid = false;
    } else if (!/^\d{2}$/.test(expirationMonth) || !/^\d{2}$/.test(expirationYear)) {
      newErrors.expirationMonth = "Invalid expiration date";
      isValid = false;
    }

    if (!cvc.trim()) {
      newErrors.cvc = "Can’t be blank";
      isValid = false;
    } else if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = "Invalid CVC";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const resetForm = () => {
    setCardHolderName("");
    setCardNumber("");
    setExpirationMonth("");
    setExpirationYear("");
    setCvc("");
    setErrors({
      cardHolderName: "",
      cardNumber: "",
      expirationMonth: "",
      expirationYear: "",
      cvc: "",
    });
    setConfirmationSuccess(false);
  };

  const handleConfirm = () => {
    if (validateInputs()) {
      // Simulate a successful confirmation
      setConfirmationSuccess(true);

      const expirationDate = `${expirationMonth.padStart(2, "0")}/${expirationYear.slice(-2)}`;

      onUpdateCardInfo({
        cardHolderName,
        cardNumber,
        expirationDate,
        cvc,
      });
    }
  };

  return (
    <div className="inputs-container">
    {!confirmationSuccess ? (
      <>
        <label htmlFor="Cardholder Name">Cardholder Name</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
          className={errors.cardHolderName ? "error-input" : ""}
        />
        <div className="error-message">{errors.cardHolderName}</div>

        <label htmlFor="Card Number">Card Number</label>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className={errors.cardNumber ? "error-input" : ""}
        />
        <div className="error-message">{errors.cardNumber}</div>

        <div className="exp-date-cvc">
          <div className="month-year">
            <label htmlFor="Exp. Date (MM/YY)">Exp. Date (MM/YY)</label>
            <div className="mm-yy">
              <input
                type="number"
                placeholder="MM"
                value={expirationMonth}
                onChange={(e) => setExpirationMonth(e.target.value)}
                className={errors.expirationMonth ? "error-input" : ""}
              />
              <input
                type="number"
                placeholder="YY"
                value={expirationYear}
                onChange={(e) => setExpirationYear(e.target.value)}
                className={errors.expirationMonth ? "error-input" : ""}
              />
            </div>
            <div className="error-message">{errors.expirationMonth}</div>
          </div>
          <div className="cvc-div">
            <label htmlFor="CVC">CVC</label>
            <input
              type="number"
              placeholder="e.g. 123"
              id="cvc-inp"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className={errors.cvc ? "error-input" : ""}
            />
            <div className="error-message">{errors.cvc}</div>
          </div>
        </div>

        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm
        </button>
      </>
    ) : (
      <Confirmed onContinue={resetForm} />
    )}
  </div>
  );
};

export default Intputs;
