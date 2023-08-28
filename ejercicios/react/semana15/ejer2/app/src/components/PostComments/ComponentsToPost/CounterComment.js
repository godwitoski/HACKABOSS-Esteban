import React, { useState, useEffect } from "react";
function CounterComment() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>contador: {seconds}</p>
    </>
  );
}

export default CounterComment;
