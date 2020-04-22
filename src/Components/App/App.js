import React from 'react';
import './App.css';
import Countdown from "../Countdown/Countdown"
import Currenttime from '../Currenttime/Currenttime';
import CountUp from "../CountUp/CountUp"

function App() {
  return (
    <div >
      <Currenttime/>
      <CountUp />
      <Countdown />
    </div>
  );
}

export default App;
