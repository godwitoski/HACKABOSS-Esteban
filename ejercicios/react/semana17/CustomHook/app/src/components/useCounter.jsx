import { useState } from "react";

function useCounter(defaultValue = 0) {
  const [counter, setCounter] = useState(defaultValue);

  const increment = () => {
    setCounter((counterValue) => counterValue + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter((counterValue) => counterValue - 1);
    }
  };

  return {
    counter,
    increment,
    decrement,
  };
}

export default useCounter;
