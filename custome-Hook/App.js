import "./styles.css";
import { useState } from 'react';

import useCounter from "./useCounter";
export default function App() {

  const[count,Inc,Dec,Reset]=useCounter();
  return (
    <div className="App">
      <h1>Hello</h1>
      count is: {count}<br></br>
      <button onClick={Inc}>INC</button>
      <button onClick={Dec}>Dec</button>
      <button onClick={Reset}>Reset</button>

    </div>
  );
}
