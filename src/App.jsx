// import "./App.css";
// import Card from "./components/cards/Card";
// import Intputs from "./components/inputs/Intputs";

// function App() {
//   return <>
//   <Card/>
//   <Intputs/>
//   </>;
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Card from './components/cards/Card';
import Intputs from './components/inputs/Intputs';

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardHolderName: 'JANE APPLESEED',
    cardNumber: '0000 0000 0000 0000',
    expirationDate: '00/00',
    cvc: '000',
  });

  const handleUpdateCardInfo = (newCardInfo) => {
    setCardInfo(newCardInfo);
  };

  return (
    <>
      <Card {...cardInfo} />
      <Intputs onUpdateCardInfo={handleUpdateCardInfo} />
    </>
  );
}

export default App;