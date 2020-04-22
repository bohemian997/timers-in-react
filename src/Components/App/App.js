import React from 'react';
import './App.css';
import Countdown from "../Countdown/Countdown"
import Currenttime from '../Currenttime/Currenttime';

function App() {
  return (
    <div >
      <Currenttime/>
      <Countdown />
      <Countdown />
    </div>
  );
}

export default App;
