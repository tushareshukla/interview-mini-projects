import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Get the current state before updating
    const currentState = count;
    // Update the state
    setCount((prevCount) => {
      // Log the state before updating
      let updateCount = prevCount + 1;
      console.log(
        "State before update:",
        currentState,
        "and this is updated count",
        updateCount
      );
      // Return the updated state

      return updateCount;
    });
  };

  // const decrement = () => {
  //   // Get the current state before updating
  //   const currentState = count;
  //   // Update the state
  //   setCount((prevCount) => {
  //     // Log the state before updating
  //     console.log("State before update:", currentState);
  //     // Return the updated state
  //     return prevCount - 1;
  //   });
  // };

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={increment}>Increment</button>
      {/* <button onClick={}>Decrement</button> */}
      <p></p>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
