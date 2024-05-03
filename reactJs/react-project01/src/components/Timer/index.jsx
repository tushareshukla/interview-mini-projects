import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive , seconds]);

  const handleStart = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setSeconds(10);
    setIsActive(false);
  };

  return (
    <div>
      Counter: {seconds}
      <br />
      <button onClick={handleStart}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
