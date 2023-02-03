import React, { useRef, useEffect, useState } from "react";
import "./App.css";

export default function Countdown() {
  const [num, setNum] = useState(10000);
  const [pause, setPause] = useState(false);

  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  return (
    <>
      <h1 className="Title">Basic React App</h1>
      <div className="Container">
        <div className="number">{num}</div>
        <button onClick={handleClick} className="btn">
          {pause ? "Run" : "Pause"}
        </button>
      </div>
    </>
  );
}
