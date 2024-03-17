import React, { useState, useEffect } from "react";
import "./index.css";
import { getData } from "./utils/apiUtils";

const Counter = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleIncreament = () => {
    // Counter state is incremented
    setCounter((prev) => prev + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleDecreament = () => {
    // Counter state is decremented
    setCounter((prev) => prev - 1);
  };

  const getTodoData = async () => {
    const todoList = await getData();
    console.log("todoList", todoList.data);
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <div className="counter">
      <div data-testid="counter-text">Counter App</div>
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
        }}
        data-testid="counter"
      >
        {counter}
      </div>
      <div className="buttons">
        <button
          onClick={handleIncreament}
          className="increament"
          data-testid="increament-btn"
        >
          Increment
        </button>
        <button
          className="decreament"
          onClick={handleDecreament}
          data-testid="decreament-btn"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
