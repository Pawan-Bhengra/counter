import React, { useState, useEffect } from "react";
import "../App.css";

// counter with functional component
function NewCounter() {
  // useState pass value show current state value and setcount function sets the value of the state
  // setCount will update the count state
  const [count, setCount] = useState(0);
  const [save, setSave] = useState(0);
  const [third, setThird] = useState(0);
  useEffect(() => {
    // document.title = `clicked ${count}`;
    setSave(count ? count - 2 : 0);
  });
  // through increment method the value of counter is increment
  const increment = () => {
    setCount(count + 1);
    setThird(third + 2);
  };

  const handleCountSubmit = (e) => {
    e.preventDefault();
  };

  // no need to write this in hooks
  return (
    <div className="App">
      <div className="container">
        <fieldset>
          {/* input increment */}
          <legend>Increment Value</legend>
          <input
            className="input"
            type="number"
            placeholder="Increment Value"
            name="count"
            value={count}
            onSubmit={handleCountSubmit}
          />
        </fieldset>
      </div>
      <div>{third}</div>
      <div>{save}</div>
      <div>{count}</div>

      <button onClick={increment}> + </button>
    </div>
  );
}

export default NewCounter;
