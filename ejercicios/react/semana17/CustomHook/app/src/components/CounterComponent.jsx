import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {
  const { counter, increment, decrement } = useCounter();

  return (
    <div>
      <h1>{`El contador tiene un valor de ${counter}`}</h1>
      <button onClick={decrement}>Restar</button>
      <button onClick={increment}>Sumar</button>
    </div>
  );
}

export default CounterComponent;
